import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subject, } from "rxjs";

@Injectable({providedIn: 'root'})

export class HttpRequestsService {

  error = new Subject;
  calculationInfo: object = {};
  infoAboutUser: object = {};

  constructor(private http:HttpClient) {}

  postCalculationInfo(calculationInputsInfo:any) {
    const httpPostBody = calculationInputsInfo;
    this.http
    .post<{name: string}>(
      'http://localhost:8000/request/calculate ', 
      httpPostBody, {
        observe: 'response'
      }
      )
      .subscribe(responseData => {
        this.calculationInfo = responseData.body
        return responseData.body
      }, error => {
        this.error.next(error.message);
      });
    }

  postInfoAboutUser(infoAboutUserInput: any) {
    const httpPostBody = infoAboutUserInput;
    this.http
    .post(
      'http://localhost:8000/request/create',
      httpPostBody, {
        observe: 'response'
      }
    ).subscribe(responseData => {
console.log(responseData.body)
    }), error => {
      this.error.next(error.message)
    }
  }

  }
  


