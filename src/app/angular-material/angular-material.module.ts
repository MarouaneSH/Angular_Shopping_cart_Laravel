import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatMenuModule,MatInputModule,MatCardModule,MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatInputModule,MatCardModule,MatDialogModule,MatMenuModule],
  exports: [MatButtonModule,MatInputModule,MatCardModule,MatDialogModule,MatMenuModule],
  declarations: []
})
export class AngularMaterialModule { }
