import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

  peliculas:any[]=[
    {name:'Nebulosa de carina',
    img:'../assets/images/nebulosa-de-carina.jpg',
    desc:'descripcion'},
    {
      name:'Quinteto de Stephan',
      img:'../assets/images/quinteto-de-stephan.jpg',
      desc:'descripcion.'
    },
    {
      name:'Smacs',
      img:'../assets/images/smacs-073.jpg',
      desc:'descripcion.'
    }
  ];


  constructor(private ngbCarouselConfig :  NgbCarouselConfig) {
    ngbCarouselConfig.interval = 3000;
  }


  ngOnInit(): void {
  }

}
