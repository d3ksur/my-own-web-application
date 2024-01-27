import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by-use',
  templateUrl: './track-by-use.component.html',
  styleUrls: ['./track-by-use.component.scss'],
})
export class TrackByUseComponent {
  public names: Array<string> = ['Alice', 'Bob', 'Charlie'];
  public newName: any = '';

  public constructor() {
    console.log('hola');
  }

  trackByFunction(index: number, name: string): string {
    return name; // Utiliza el nombre como clave única
  }

  addName(): void {
    if (this.newName.trim() !== '') {
      this.names.push(this.newName.trim());
      this.newName = '';
    }
  }

  removeName(index: number): void {
    this.names.splice(index, 1);
  }
}
