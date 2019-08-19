import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#materialLoginFormEmail').value;
    const password = target.querySelector('#materialLoginFormPassword').value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      console.log(data);
    });
    console.log(username, password);
  }

}
