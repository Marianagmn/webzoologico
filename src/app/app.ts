import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './components/animal-component/animal-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, AnimalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alias= 'webzoologico';
  protected readonly title = signal('webzoologico');
}
