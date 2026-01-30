import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SigninService } from '../services/signin-service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule,RouterLink,NgIf],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  router = inject(Router)
  signinForm: FormGroup
  errorMessage:string = " "
  constructor(private fb: FormBuilder,private signinvar:SigninService)
  {
    this.signinForm = this.fb.group({
      emailid: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    })
  }
  
  onSubmit()
  {

    if(this.signinForm.invalid)
    {

      return;
    }
    const logindata = {
      emailid: this.signinForm.value.emailid,
      password: this.signinForm.value.password
    };

    this.signinvar.getParticipant(logindata).subscribe({
      next: (data) => {
      console.log(data);
      this.router.navigateByUrl('/logged-in');
    },
    error: (err) => {
      this.errorMessage = 'Wrong username or password';
    }
    })

  }
}
