import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-auth-employee',
  templateUrl: './auth-employee.component.html',
  styleUrls: ['./auth-employee.component.css']
})
export class AuthEmployeeComponent implements OnInit {
  @ViewChild('authForm') signUpForm: NgForm;
  isLoggedin = false;
  employee = {
    login: '',
    password: '',
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.employee.login = this.signUpForm.value.login;
    this.employee.password = this.signUpForm.value.password;

    let authObs: Subscription;

    authObs = this.authService.login(this.employee.login, this.employee.password).subscribe(resData => {
      console.log(resData);
      this.router.navigate(['detail']);
      this.isLoggedin = true;
    })

  };

}
