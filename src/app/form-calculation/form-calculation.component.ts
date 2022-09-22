import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';


import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-form-calculation',
  templateUrl: './form-calculation.component.html',
  styleUrls: ['./form-calculation.component.css'],
})
export class FormCalculationComponent implements DoCheck {
amountInput: number = 0;
numOfMOnthsInput: number = 0;
btnActive: boolean = false;
calculationInputs = {
  amount: 0,
  numOfMonths: 0
}

calculationOutput = {
  monthlyPayment: 0, 
  yearlyInterest: 0, 
  RPSN: 0, 
  overallAmount: 0, 
  fixedFee: 0
};

requestCalc: any;

  constructor( 
    private httpRequestsService: HttpRequestsService,
    private userInfoService: UserInfoService
    ) {}

  ngOnInit(): void {
  }
  
  ngDoCheck() {
    this.requestCalc = this.httpRequestsService.calculationInfo
    if (this.requestCalc) {
      console.log(this.requestCalc)
      console.log(this.requestCalc.RPSN)
    }
  }

  calculate(amountCalculate, numOfMonthsCalculate ) {
    this.calculationInputs.amount = amountCalculate;
    this.calculationInputs.numOfMonths = numOfMonthsCalculate
    if (this.calculationInputs) {
      this.userInfoService.calculationInformation.amount =  amountCalculate;
      this.userInfoService.calculationInformation.numOfMonths = numOfMonthsCalculate;
    }

    console.log(this.userInfoService)

  }
  
  changeOfAmount(amountChange) {
    this.amountInput = Number(amountChange.target.value);
    this.calculationInputs.amount = this.amountInput
    this.changeBtnActive();
   this.httpRequestsService.postCalculationInfo((this.calculationInputs));
  }

  changeOfNumOfMonths(numChange) {
    this.numOfMOnthsInput = Number(numChange.target.value);
    this.calculationInputs.numOfMonths = this.numOfMOnthsInput;
    this.changeBtnActive();
    this.httpRequestsService.postCalculationInfo(
      (this.calculationInputs)
      );
  }

  changeBtnActive() {
    if (this.amountInput && this.numOfMOnthsInput) {
      this.btnActive = true;
      } else {
        this.btnActive = false;
      }
  }

}
