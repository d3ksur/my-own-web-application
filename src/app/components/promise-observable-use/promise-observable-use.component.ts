import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

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
    // Esto es una promesa la cual imprime 1 + 1 en la consola despues de 2 segundos
    let promise: Promise<number> = new Promise<number>((resolve) => {
      setTimeout(() => resolve(1 + 1), 2000);
    });
    promise.then(console.log);

    // Esto es un observable el cual va sumando 1 por segundo y despues de 5 segundo se corta
    let observable = new Observable<number>((observer) => {
      let count = 1;
      let interval = setInterval(() => {
        observer.next(count++);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    });

    let subscription = observable.subscribe((value) => {
      console.log(value);
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

  public getPokemons(pokemonName: string): Subscription | undefined {
    if (this.selectedPokemon === '') {
      return;
    }
    return this.http
      .get(this.pokemonApi + pokemonName)
      .subscribe((data: any) => {
        this.pokemonAbilities = data.abilities;
        this.selectedPokemon = '';
      });
  }
}
