import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Recuperar } from '../../models/recuperar.model';
import { Noticias } from '../../models/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasProviderService {

  constructor(private httpService:HttpService) { }

  public postRecuperar(recuperar: any): Observable<Recuperar>{
  return this.httpService.post('/noticias/add',recuperar);
  };

  public getNoticia(): Observable<Noticias>{
    return this.httpService.get<Noticias>('/noticias/all');
  };
}
