import { Component} from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-component',
  imports: [CommonModule],
  templateUrl: './animal-component.html',
  styleUrls: ['./animal-component.css'],
})
export class AnimalComponent {
    animalList:any= [];
    animalForm: FormGroup | any;

constructor(private animalService: AnimalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
  }

getAllAnimals() {
 this.animalService.getAllAnimalsData().subscribe((data: {}) => {
 this.animalList=data;
 });
 }
 ngOnInit() {
this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: '',
    });
 this.getAllAnimals();
 }
newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }

newAnimalEntry() {
    this.animalService.newAnimal(this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio'])
        .then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }
 ngOnChanges() {
    this.getAllAnimals();
  }
}
