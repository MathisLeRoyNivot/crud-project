import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { 
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),
    })
  }

  login () {
    const val = this.form.value;

    if (val.username && val.password) {
      let data = this.loginService.login(environment.apiLogin, val.username, val.password);
      return data;
    }
  }

}
