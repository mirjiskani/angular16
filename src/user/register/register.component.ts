import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'User Registration';
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    userName: ['', Validators.required],
    dateofbirth: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  },
    { updateOn: "blur" });

  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],

  },
    { updateOn: "blur" });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private apiService: ApiService) { }
  submit() {
    let data = {
      firstName: this.firstFormGroup.controls['firstName'].value,
      userName: this.firstFormGroup.controls['userName'].value,
      dateofbirth: this.firstFormGroup.controls['dateofbirth'].value,
      email: this.firstFormGroup.controls['email'].value,
      password: this.firstFormGroup.controls['password'].value,
      address: this.secondFormGroup.controls['address'].value,
      city: this.secondFormGroup.controls['city'].value,
      state: this.secondFormGroup.controls['state'].value,
      country: this.secondFormGroup.controls['country'].value

    }
    this.apiService.createUser('users/create', data).subscribe((response) => {
      console.log(response);
    });

  }
}
