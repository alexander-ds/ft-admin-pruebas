import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.css'
})
export class IngresarComponent {
  estudiantes: any;
  nombres = document.querySelector("#nombre");

  async consultaEstudiantes(){
   
      axios.get("http://localhost:5000/estudiantes");
    }
  
}
