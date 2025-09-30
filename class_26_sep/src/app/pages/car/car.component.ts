import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  imports: [UpperCasePipe]
})
export class CarComponent {
  brand = signal('Renault');
  student = signal('Josehp Ramos - 160004531');
  year = signal(2020);


  getCarDescription() {
    return `${this.brand} - ${this.year}`;
  }

  changeCar() {
    this.brand.set('Kia');
    this.year.set(2021);
  }

  resetForm() {
    this.brand.set('Renault');
    this.year.set(2020);
  }

  changeYear() {
    this.year.set(2025);
  }
}