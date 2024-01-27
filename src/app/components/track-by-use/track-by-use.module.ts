import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackByUseComponent } from './track-by-use.component';

@NgModule({
  declarations: [TrackByUseComponent],
  exports: [TrackByUseComponent],
  imports: [CommonModule, MatCardModule],
})
export class TrackByUseModule {}
