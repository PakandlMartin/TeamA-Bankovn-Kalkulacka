import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {HttpRequestsService} from "../../http-requests.service";

@Component({
  selector: 'app-auth-employee',
  templateUrl: './auth-employee.component.html',
  styleUrls: ['./auth-employee.component.css']
})
export class AuthEmployeeComponent implements OnInit {
  @ViewChild('authForm') signUpForm: NgForm;
  isLoggedIn = false;
  employee = {
    login: '',
    password: '',
  }

  constructor(private httpService: HttpRequestsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.employee.login = this.signUpForm.value.login;
    this.employee.password = this.signUpForm.value.password;

    let authObs: Subscription;

    authObs = this.httpService.login(this.employee.login, this.employee.password).subscribe(resData => {
      console.log(resData);
      this.router.navigate(['detail']);
      this.isLoggedIn = true;
    })

  };

}
