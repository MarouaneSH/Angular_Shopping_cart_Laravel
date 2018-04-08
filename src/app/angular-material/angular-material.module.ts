import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatInputModule,MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatInputModule,MatCardModule],
  exports: [MatButtonModule,MatInputModule,MatCardModule],
  declarations: []
})
export class AngularMaterialModule { }
