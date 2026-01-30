import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../register/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  
  constructor(private http:HttpClient){}

  addParticipant(model:Register)
  {
    const url = "http://localhost:9090/register";
    return this.http.post(url,model);
  }
}
