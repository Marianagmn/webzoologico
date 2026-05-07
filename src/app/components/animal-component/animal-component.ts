import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-component',
  imports: [CommonModule],
  templateUrl: './animal-component.html',
  styleUrls: ['./animal-component.css'],
})
export class AnimalComponent {
    animalList:any= [];

constructor(private animalService:AnimalService) {}

getAllAnimals() {
 this.animalService.getAllAnimalsData().subscribe((data: {}) => {
 this.animalList=data;
 });
 }
 ngOnInit() {
this.getAllAnimals();
 }

}
