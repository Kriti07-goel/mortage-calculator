import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
    MatInputModule, MatAutocompleteModule, MatNativeDateModule, MatDatepickerModule,
    MatExpansionModule, MatCheckboxModule, MatTabsModule, MatSortModule, MatRippleModule,
    MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatSliderModule,
    MatSnackBarModule, MatRadioModule, MatTooltipModule, MatStepperModule,
    MatBadgeModule, MatMenuModule, MatBottomSheetModule,
    MatSlideToggleModule, ReactiveFormsModule,
    FormsModule, RouterModule,
     DragDropModule, LayoutModule, MatButtonToggleModule, MatGridListModule, FlexLayoutModule
  ],
  exports: [
    MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
    MatInputModule, MatAutocompleteModule, MatNativeDateModule, MatDatepickerModule,
    MatExpansionModule, MatCheckboxModule, MatTabsModule, MatSortModule, MatRippleModule,
    MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatSliderModule,
    MatSnackBarModule, MatRadioModule, MatTooltipModule, MatStepperModule,
    MatBadgeModule, MatMenuModule, MatBottomSheetModule,
    MatSlideToggleModule, ReactiveFormsModule,
    FormsModule, RouterModule,
   DragDropModule, LayoutModule, MatButtonToggleModule, MatGridListModule,FlexLayoutModule
  
  ]
})

export class MaterialModule { }
