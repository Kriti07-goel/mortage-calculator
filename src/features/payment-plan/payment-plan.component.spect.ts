/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentPlanComponent } from './payment-plan.component';

describe('HomeComponent', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;
  const formGroup: FormGroup = new FormGroup({});

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      declarations: [ PaymentPlanComponent ], 
      providers: [
        { provide: FormGroup, useValue: formGroup },
        { provide: MatSnackBar, useValue: spy }
      ]
    })
    .compileComponents();
    matSnackBarSpy = TestBed.get<MatSnackBar>(MatSnackBar);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlanComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
        amount: new FormControl(100000, [Validators.min(1)]),
        interest: new FormControl(0, [Validators.max(100), Validators.min(1)]),
        years: new FormControl(),
        months: new FormControl(),
        frequency: new FormControl(),
        term: new FormControl(),
        preamount: new FormControl(0),
        prefrequency: new FormControl(),
        preStart: new FormControl()
    });
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch year list', () => {
    expect(component.yearList.length).toBeGreaterThan(0);
  });
  it('should fetch month list', () => {
    expect(component.monthsList.length).toBeGreaterThan(0);
  });
 

});
