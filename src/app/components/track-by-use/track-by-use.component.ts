import { Component } from '@angular/core';

interface IUser {
  id: number;
  name: string;
}
@Component({
  selector: 'app-track-by-use',
  templateUrl: './track-by-use.component.html',
  styleUrls: ['./track-by-use.component.scss'],
})
export class TrackByUseComponent {
  public usersName: Array<IUser> = [];
  public newName: any = '';

  public constructor() {}

  public trackByFunction(index: number, user: IUser): number {
    return user.id;
  }

  public addName(): void {
    if (this.newName.trim() !== '') {
      let newIndex: number = this.usersName.length;
      if (newIndex === 0) {
        newIndex = this.usersName.length;
      }
      newIndex + 1;

      this.usersName.push({
        id: newIndex,
        name: this.newName.trim(),
      });
      this.newName = '';
    }
  }

  public removeName(): void {
    this.usersName = [];
  }
}
