import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){
    //post details to API server and return info
    return this.http.post('/api/auth', {
      username,
      password
    })
  }
}
