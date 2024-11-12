import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { ConsultarComponent } from './consultar/consultar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IngresarComponent,ConsultarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ft-prueba-ceinfes';
}
