import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';

import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css'],
  standalone: true,
  imports: [MatBadgeModule, 
            MatButtonModule, 
            MatIconModule,
            MatBottomSheetModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule, 
            MatDatepickerModule, 
            MatNativeDateModule,
            MatDividerModule,
            MatListModule,
            MatMenuModule,
            MatPaginatorModule,
            MatCardModule,
    MatRadioModule,
    FormsModule,
    NgIf,
    MatSliderModule,
    MatProgressBarModule,
          ],

})
export class ElementosComponent {
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

}
