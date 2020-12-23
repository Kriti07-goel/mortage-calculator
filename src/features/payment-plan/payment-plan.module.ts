import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPlanComponent } from './payment-plan.component';
import { MaterialModule } from 'src/shared/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
    
  ],
  declarations: [PaymentPlanComponent],
  exports: [PaymentPlanComponent]
})
export class PaymentPlanModule { }
