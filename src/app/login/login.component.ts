import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : String;
  Password : String;

 constructor(private authService : AuthService, private router : Router) {

 }
  ngOnInit() {}
  OnSubmit(){
    this.authService.validate(this.username, this.Password)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['home']);

    })
  }

}