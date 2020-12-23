import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss']
})
export class PaymentPlanComponent implements OnInit {
  @Input()
  form: FormGroup;

  yearList: any;
  tooltip = {
    mortage : false,
    interet: false,
    amor: false,
    term: false,
    freq: false,
    preamt: false,
    prefreq: false,
    start: false
  }
  monthsList: any;
  freqList: any;
  termsList: any;

  constructor(private http: HttpClient) { 
   
  }
  fetchYearList() {
    // this api will work when jso-server is installed and working
    this.http.get('http://localhost:3000/years').subscribe(data => {
      
      this.yearList = data;
      this.form.patchValue({
        years: this.yearList[0].id
      })
    })

  }

  monthList() {
    // this api will work when jso-server is installed and working
    this.http.get('http://localhost:3000/months').subscribe(data => {
      
      this.monthsList = data;
      this.form.patchValue({
        months: this.monthsList[0].id
      })
    })
  }
  showInfo(type) {
    this.tooltip[type] = !this.tooltip[type];
  }
  frequencyList() {
    // this api will work when jso-server is installed and working
    this.http.get('http://localhost:3000/frequency').subscribe(data => {
     
      this.freqList = data;
      this.form.patchValue({
        frequency: this.freqList[0].id
      })
    })
  }
  termList() {
    // this api will work when jso-server is installed and working
    this.http.get('http://localhost:3000/term').subscribe(data => {
      
      this.termsList = data;
      this.form.patchValue({
        term: this.termsList[0].id
      })
    })
  }
  ngOnInit() {
    this.fetchYearList();
    this.monthList();
    this.frequencyList();
    this.termList();
   
  }

}
