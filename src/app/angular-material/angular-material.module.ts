import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatButtonModule,MatMenuModule,MatInputModule,MatCardModule,MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatListModule,MatIconModule, MatButtonModule,MatInputModule,MatCardModule,MatDialogModule,MatMenuModule],
  exports: [MatListModule,MatIconModule, MatButtonModule,MatInputModule,MatCardModule,MatDialogModule,MatMenuModule],
  declarations: []
})
export class AngularMaterialModule { }
