import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('authForm') signUpForm: NgForm;
  client = {
    token: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.client.token = this.signUpForm.value.token;
  }

}
