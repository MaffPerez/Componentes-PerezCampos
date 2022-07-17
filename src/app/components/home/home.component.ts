import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list = [
    {
      img: '../assets/images/imagen1.png/',
      title: 'Nebulosa de Carina',
      description:'El telescopio espacial James Webb de la NASA ha revelado viveros estelares y estrellas individuales nacientes que antes habían estado ocultos en la nebulosa de Carina'
    },
    {
      img: '../assets/images/imagen2.jpg/',
      title: 'Nebulosa del Anillo Sur',
      description:'El telescopio James Webb ha obtenido la imagen infrarroja más profunda y nítida del Universo distante hasta el momento, y en solo 12,5 horas.'
    },
    {
      img: '../assets/images/imagen3.jpeg/',
      title: 'SMACS 0723',
      description:'El telescopio espacial James Webb de la NASA ha revelado viveros estelares y estrellas individuales nacientes que antes habían estado ocultos en la nebulosa de Carina'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
