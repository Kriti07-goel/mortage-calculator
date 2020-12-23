import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PrepaymentPlanModule } from '../prepayment-plan/prepayment-plan.module';
import { PaymentPlanModule } from '../payment-plan/payment-plan.module';
import { PaymentPlanComponent } from '../payment-plan/payment-plan.component';
import { PrepaymentPlanComponent } from '../prepayment-plan/prepayment-plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    PrepaymentPlanModule,
    PaymentPlanModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
