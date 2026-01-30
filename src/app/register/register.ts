import { NgIf } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/register-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  router = inject(Router);
  registerForm: FormGroup

  constructor(private fb: FormBuilder,private registervar:RegisterService,private route:ActivatedRoute)
  {
    this.registerForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName:['',[Validators.required]],
      emailid:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(10)]],
      confirmPassword:['',[Validators.required,Validators.minLength(10)]]
    })
  }
  onSubmit()
  {
    if(this.registerForm.valid)
    {
      console.log(this.registerForm.value)
    }
    let values = this.registerForm.value
    console.log(values)
    this.registervar.addParticipant(values as any).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl("/thank-you")
    })
    
  }

  
    


}
