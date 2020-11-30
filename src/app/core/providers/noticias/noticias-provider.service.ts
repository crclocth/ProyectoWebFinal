import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Recuperar } from '../../models/recuperar.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasProviderService {

  constructor(private httpService:HttpService) { }
  public postRecuperar(recuperar: any): Observable<Recuperar>{
  return this.httpService.post('/recuperar/add',recuperar);
  };
}
