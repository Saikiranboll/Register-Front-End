import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  
  constructor(private http:HttpClient){}

  getParticipant(data:{emailid:string;password:string})
  {
    const url = "http://localhost:9090/signin"
    return this.http.post(url,data);
  }

}
