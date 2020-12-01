import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { Noticias } from '../../../core/models/noticias.model';

@Component({
  selector: 'app-informacion1',
  templateUrl: './informacion1.component.html',
  styleUrls: ['./informacion1.component.less']
})
export class Informacion1Component implements OnInit {
  
  public noticias$:Observable<Noticias[]>;

  constructor(private noticiasProviderService: NoticiasProviderService) {
    this.noticias$ = this.getNoticiasx();
  }
  
  getNoticiasx(){
    return this.noticiasProviderService.getNoticias(); 
    
  }

  

  ngOnInit(): void {
    
  } 
}
