import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SinglentonUseComponent } from './singlenton-use.component';

@NgModule({
  declarations: [SinglentonUseComponent],
  exports: [SinglentonUseComponent],
  imports: [CommonModule, MatCardModule]
})
export class SinglentonUseModule {}
