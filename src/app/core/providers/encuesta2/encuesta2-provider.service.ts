import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http/http.service';
import { Encuesta2 } from '../../models/encuesta2.model';

@Injectable({
  providedIn: 'root'
})
export class Encuesta2ProviderService {

  constructor(private httpService:HttpService) { }
  public postEncuesta2(encuesta2: any): Observable<Encuesta2>{
  return this.httpService.post('/encuesta2/add',encuesta2);
  };
}
