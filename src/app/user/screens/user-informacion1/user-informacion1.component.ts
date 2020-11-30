import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { Noticias } from '../../../core/models/noticias.model';

@Component({
  selector: 'app-user-informacion1',
  templateUrl: './user-informacion1.component.html',
  styleUrls: ['./user-informacion1.component.less']
})
export class UserInformacion1Component implements OnInit {

  public noticias$!:Observable<Noticias[]>;

  constructor(private noticiasProviderService: NoticiasProviderService) {
    this.noticias$ = this.getNoticias();
  }
  
  getNoticias(): Observable<Noticias[]>{
    return this.noticiasProviderService.getNoticias();
  }
  ngOnInit(): void {
    
  } 

}
