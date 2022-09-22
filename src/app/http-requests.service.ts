import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Subject, } from "rxjs";




export interface AuthResponseData {
  login: string,
  name: string,
  roles: [string],
  token: string

}
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


  login(login: string, password: string) {
    let codedData = btoa (login + ':' + password);
    return this.http.get<AuthResponseData>('http://localhost:8000/login',
      {headers: new HttpHeaders({
            Authorization: 'Basic ' + codedData
          }

        )});
  }

  }



