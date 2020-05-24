import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	constructor(private http: HttpClient, private router: Router) {}

	async login(url, username, password) {
		let credentials: Object = {
			username: username,
			password: password
		};

		if (username && password) {
			// Call to API
			this.http.post(url, credentials).subscribe(
				(data) => {
					if (data.hasOwnProperty('access_token')) {
						// Store Data in Object
						let resData: Object = data;

						// Get Signature from token
						let [ jwtHeader, jwtPayload, jwtSignature ] = resData['access_token'].split('.');

						// Store data to local storage
						localStorage.setItem('access_token', resData['access_token']);
						localStorage.setItem('signature', jwtSignature);
						localStorage.setItem(
							'public_key',
							JSON.parse(atob(resData['access_token'].split('.')[1])).publicKey
						);

						// Redirect to Admin Homepage
						this.router.navigate([ '/' ]);
					} else {
						// Redirect to Admin Login Page
						this.router.navigate([ '/login' ]);
					}
				},
				(error) => {
					console.log(error);
					// Redirect to Admin Login Page
					this.router.navigate([ '/login' ]);
				}
			);
		}
	}
}