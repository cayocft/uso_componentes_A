import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string;
  nombre: string;
  direccion: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icono: "cellular-outline",
      nombre: "Contacto",
      direccion: "/contacto",
    }, 
    {
      icono: "desktop-outline",
      nombre: "Nosotros",
      direccion: "/nosotros",
    },   
  ];

  constructor() { }

  ngOnInit() {
  }

}
