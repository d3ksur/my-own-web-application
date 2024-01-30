import { Component } from '@angular/core';

@Component({
  selector: 'app-singlenton-use',
  templateUrl: './singlenton-use.component.html',
  styleUrls: ['./singlenton-use.component.scss'],
})
export class SinglentonUseComponent {
  private static instance: SinglentonUseComponent;
  public text: string = '';

  public constructor() {}

  public static getInstance(): SinglentonUseComponent {
    if (!SinglentonUseComponent.instance) {
      SinglentonUseComponent.instance = new SinglentonUseComponent();
    }

    return SinglentonUseComponent.instance;
  }
}

function clientCode(): void {
  const s1 = SinglentonUseComponent.getInstance();
  const s2 = SinglentonUseComponent.getInstance();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}
