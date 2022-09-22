import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth-employee',
  templateUrl: './auth-employee.component.html',
  styleUrls: ['./auth-employee.component.css']
})
export class AuthEmployeeComponent implements OnInit {
  @ViewChild('authForm') signUpForm: NgForm;
  employee = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.employee.email = this.signUpForm.value.email;
    this.employee.password = this.signUpForm.value.password;
  }

}
