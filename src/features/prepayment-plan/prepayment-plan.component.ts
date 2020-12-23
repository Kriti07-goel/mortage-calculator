import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prepayment-plan',
  templateUrl: './prepayment-plan.component.html',
  styleUrls: ['./prepayment-plan.component.scss']
})
export class PrepaymentPlanComponent implements OnInit {
  @Input()
  form: FormGroup;
  tooltip = {
    
    preamt: false,
    prefreq: false,
    start: false
  }
  preFeq: any;
  constructor(private http: HttpClient) { 
  }
  getPrepaymentFreq() {
    // this api will work when jso-server is installed and working
    this.http.get('http://localhost:3000/preFrequency').subscribe(data => {
      this.preFeq = data;
      this.form.patchValue({
        prefrequency: this.preFeq[0].id
      })
    })
  }
  showInfo(type) {
    this.tooltip[type] = !this.tooltip[type];
  }

  ngOnInit() {
    this.getPrepaymentFreq();
  }
  

}
