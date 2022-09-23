import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';
import { UserInfoService } from '../user-info.service';
import {ViewChild} from "@angular/core";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  userForm = {
    applicantType: "INDIVIDUAL",
    name: "Tomáš",
    surname: "Novák",
    email:"TomasNovak@seznam.cz"
  }

  constructor(private httpRequestsService: HttpRequestsService,
    private userInfoService: UserInfoService
    ) { }

  ngOnInit(): void {
   
  }

  onClick() {
    console.log(this.userInfoService.calculationInformation);
    this.httpRequestsService.postInfoAboutUser(this.userForm)
  }

  idCreated = false;

  selectedType = 'INDIVIDUAL';


  @ViewChild('f') signUpForm: NgForm;

  client = {
    applicantType: '',
    name: '',
    surname: '',
    birthNum: '',
    nationality: '',
    email: '',
    phone: '',
    IC: '',
    position: '',
    companyName: '',
    amount: '',
    numOfMonths: '',
    address: {
      street: '',
      descNumber: '',
      indicativeNumber: '',
      city: '',
      postalCode: ''
    }
  };

  onSubmit() {

    this.client.applicantType = this.signUpForm.value.type;
    this.client.name;
    this.client.surname;
    this.client.birthNum;
    this.client.nationality;
    this.client.email;
    this.client.phone;
    this.client.IC;
    this.client.position;
    this.client.amount;
    this.client.numOfMonths;
    this.client.address.street;
    this.client.address.descNumber;
    this.client.address.indicativeNumber;
    this.client.address.city;
    this.client.address.postalCode;
 

    console.log(this.client);
    this.signUpForm.reset();
  }

}


 // client = {
  //   applicantType: '',
  //   name: '',
  //   surname: '',
  //   id: '',
  //   in: '',
  //   nationality: '',
  //   email: '',
  //   phone: '',
  //   street: '',
  //   cp: '',
  //   co: '',
  //   city: '',
  //   psc: '',
  //   responsiblePerson: '',
  //   job: ''
  // };
