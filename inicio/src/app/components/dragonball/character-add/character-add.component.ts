import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';



@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if(!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const objectCharacter : Character = {
      id: Math.floor(Math.random() * 1000), //this.characters.length + 1,
      name: this.name(),
      power: this.power(),
    }
/*
    const objectTest = {
      name: this.name(),
      apellido: 'perez'
    }
    console.log(objectTest);

    const newObject = {
      ...objectTest,
      edad:20,
      name: 'Carlos'
    }
    console.log(newObject);*/

  //  const newListCharacters =  [...this.characters(), newCharacter];

   // this.characters().push(newCharacter);
    //this.characters.update((list) => [...list, newCharacter]);
    //console.log(newCharacter);
    this.newCharacter.emit(objectCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
