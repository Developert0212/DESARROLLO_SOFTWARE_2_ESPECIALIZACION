import { effect, Injectable } from '@angular/core';
import { signal} from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {


  characters = signal<Character[]>(loadFromLocalStorage());


  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

  saveInLocalStorage = effect(() => {
    //console.log(`Characters count: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });


}
