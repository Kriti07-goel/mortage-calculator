import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formGroup: FormGroup;
  isLoading: boolean = false;
  isCalculatePressed: boolean = false;
  tableData = {
    termData: {
      noOfPayments: 0,
      mortPayment: 0,
      prepayment: 0,
      principal: 0,
      interest: 0,
      total: 0
    },
    amrr_period: {
      noOfPayments: 0,
      mortPayment: 0,
      prepayment: 0,
      principal: 0,
      interest: 0,
      total: 0
    }
  }
  constructor(private _snackBar: MatSnackBar) { }
  calculate() {
    this.isLoading = true;
    if(this.formGroup.valid) {  
      this.calculateInterest();
    } else {
      this._snackBar.open('There are errors on page. Fix them to proceed!', 'Close', {
        duration: 2000
      });
    }
  }
  calculateInterest() {
    this.isCalculatePressed = true;
    var amorPeriodInYears =Number(this.formGroup.value.years) + Number((this.formGroup.value.months/12).toFixed(1));
    this.tableData.amrr_period.noOfPayments = this.numberOfPayments(amorPeriodInYears, this.formGroup.value.frequency);
    this.tableData.termData.noOfPayments = this.numberOfPayments(this.formGroup.value.term, this.formGroup.value.frequency);

    this.tableData.amrr_period.principal = this.formGroup.value.amount;
    this.tableData.termData.principal = this.formGroup.value.amount;

    this.tableData.amrr_period.prepayment = this.formGroup.value.preamount;
    this.tableData.termData.prepayment = this.formGroup.value.preamount;

    var interest = Number((this.formGroup.value.amount*(this.formGroup.value.interest/100)).toFixed(2));

    this.tableData.amrr_period.interest = interest;
    this.tableData.termData.interest = interest;
    
    this.tableData.amrr_period.mortPayment = Number(((this.tableData.amrr_period.principal + interest)/this.tableData.amrr_period.noOfPayments).toFixed(2));
    this.tableData.termData.mortPayment = Number(((this.tableData.termData.principal + interest)/this.tableData.termData.noOfPayments).toFixed(2));

    this.tableData.amrr_period.total = Number(this.tableData.amrr_period.principal+interest);
    this.tableData.termData.total = Number(this.tableData.termData.principal+interest);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  numberOfPayments(years, type) {
    switch(type){
      case 1: 
        return Math.round(years*52);
        break;
      case 2: 
        return Math.round(years*26);
        break;
      case 3:
        return Math.round(years*12);
        break;
      default:
        return 0;
        break;
    }

  }
 
  ngOnInit() {
    this.formGroup = new FormGroup({
      amount: new FormControl(100000, [Validators.min(1)]),
      interest: new FormControl(5.00, [Validators.max(100), Validators.min(1)]),
      years: new FormControl(),
      months: new FormControl(),
      frequency: new FormControl(),
      term: new FormControl(),
      preamount: new FormControl(0),
      prefrequency: new FormControl(),
      preStart: new FormControl()
    });
  }
}
