import { Component, Input, OnInit } from '@angular/core';
import { Noticias } from '../../../core/models/noticias.model';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.less']
})
export class NoticiaCardComponent implements OnInit {

 //@Input()
 //noticiax: Noticias;

  constructor() { }

  ngOnInit(): void {
  }

}
