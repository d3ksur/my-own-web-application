import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promise-observable-use',
  templateUrl: './promise-observable-use.component.html',
  styleUrls: ['./promise-observable-use.component.scss'],
})
export class PromiseObservableUseComponent {
  private pokemonApi: string = 'https://pokeapi.co/api/v2/pokemon/';
  public pokemonAbilities: Array<any> = [];
  public selectedPokemon: string = '';

  public constructor(private http: HttpClient) {}

  public promiseCallback(): void {
    let promise: Promise<number> = new Promise<number>((resolve) => {
      setTimeout(() => resolve(1 + 1), 2000);
    });
    promise.then(console.log);
  }

  public getPokemons(pokemonName: string): Subscription {
    return this.http
      .get(this.pokemonApi + pokemonName)
      .subscribe((data: any) => {
        this.pokemonAbilities = data.abilities;
        this.selectedPokemon = '';
      });
  }
}
