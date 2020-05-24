import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router, 
         UrlTree} from '@angular/router';
import * as jsrsasign from 'jsrsasign';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    if (localStorage.getItem("public_key")) {
      // Convert Public Key to Object
      let pubKey = jsrsasign.KEYUTIL.getKey(localStorage.getItem("public_key"));

      // Check validity of the JWT's signature
      let isValid = jsrsasign.KJUR.jws.JWS.verifyJWT(localStorage.getItem("access_token"), pubKey, { alg: ['RS256'] });


      // If Token isn't valid, redirect to the Login page
      if (!isValid) {
        const url = 'login';
        const tree: UrlTree = this.router.parseUrl(url);
        return tree;
      } else {
        return true
      }
    }
    else {
      const url = 'login';
      const tree: UrlTree = this.router.parseUrl(url);
      return tree;
    }
  }
}