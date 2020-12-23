import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepaymentPlanComponent } from './prepayment-plan.component';
import { MaterialModule } from 'src/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PrepaymentPlanComponent],
  exports: [PrepaymentPlanComponent]
})
export class PrepaymentPlanModule { }
