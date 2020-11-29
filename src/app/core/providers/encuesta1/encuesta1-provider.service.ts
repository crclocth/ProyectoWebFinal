import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Encuesta1 } from '../../models/encuesta1.model';

@Injectable({
  providedIn: 'root'
})
export class Encuesta1ProviderService {

  constructor(private httpService:HttpService) { }
  public postEncuesta1(encuesta1: any): Observable<Encuesta1>{
  return this.httpService.post('/encuesta1/add',encuesta1);
  };
}
