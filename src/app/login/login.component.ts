import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { UserDataService } from '../services/userData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  registerForm: FormGroup;
  strongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordRegx)]),
    })
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordRegx)]),
    })
  }

  constructor(private userDataServ: UserDataService) {}

  resetFormGroup(loginFormGroup:FormGroup, registerFormGroup: FormGroup) {
    loginFormGroup.reset({'email': '','password':''});
    registerFormGroup.reset({'email': '','password':''});
  }

  onLoginUser() {
    const userData = this.loginForm
    if(userData.status === 'INVALID'){
      userData.markAllAsTouched()
    } else {
      console.log(userData.value);
      this.userDataServ
        .loginUser(userData.value)
        .subscribe(data => console.log(data));
    }
  }

  getLoginPassword(): AbstractControl {
    return this.loginForm.get("password");
  }

  getLoginEmail() : AbstractControl {
    return this.loginForm.get("email")
  }

  getRegisterPassword() : AbstractControl {
    return this.registerForm.get("password");
  }

  getRegisterEmail() : AbstractControl {
    return this.registerForm.get("email");
  }
}
