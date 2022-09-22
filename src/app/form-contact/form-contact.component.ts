import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';
import { UserInfoService } from '../user-info.service';

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


}


