import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  title = "Contacto";
  nombre = "";
  apellido = "";
  correo = "";
  comentario = "";

  constructor() { }

  ngOnInit(): void {
  }

  enviarData(){
    const DATA = {
      nombre : this.nombre,
      apellido :  this.apellido,
      correo : this.correo,
      comentario : this.comentario
    }
    console.log(DATA)
  }

}
