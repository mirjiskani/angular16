import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.login.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required]
  });

  constructor(private login: FormBuilder, private apiService: ApiService, private _router: Router) { }

  onSubmit() {
    let formData = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }
    this.apiService.adminLogin('admin/login').subscribe((response) => {
      if (response.status = 200 && response.isAdmin) {
        let data = {
          'isLogedIn':true
        }
        this._router.navigate(['admin/userlisting', data.isLogedIn]);
      }else{
        console.log("loged in failed ")
      }

    })
  }

}
