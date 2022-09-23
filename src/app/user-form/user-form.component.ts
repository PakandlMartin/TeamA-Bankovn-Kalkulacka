import {Component, OnInit} from '@angular/core';
import {ViewChild} from "@angular/core";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  selectedType = 'naturalPerson';


  @ViewChild('f') signUpForm: NgForm;

  client = {
    type: '',
    name: '',
    surname: '',
    id: '',
    in: '',
    nationality: '',
    email: '',
    phone: '',
    street: '',
    cp: '',
    co: '',
    city: '',
    psc: '',
    companyName: '',
    responsiblePerson: '',
    job: ''
  };

  constructor() {
  }



  ngOnInit(): void {
  }

  onSubmit() {

    this.client.type = this.signUpForm.value.type;
    this.client.name = this.signUpForm.value.name;
    this.client.surname = this.signUpForm.value.surname;
    this.client.id = this.signUpForm.value.id;
    this.client.in = this.signUpForm.value.id;
    this.client.nationality = this.signUpForm.value.nationality;
    this.client.email = this.signUpForm.value.email;
    this.client.phone = this.signUpForm.value.phone;
    this.client.street = this.signUpForm.value.street;
    this.client.co = this.signUpForm.value.co;
    this.client.cp = this.signUpForm.value.cp;
    this.client.city = this.signUpForm.value.city;
    this.client.psc = this.signUpForm.value.psc;

    console.log(this.client);
    this.signUpForm.reset();
  }

}
