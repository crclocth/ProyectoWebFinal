import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encuesta3 } from '../../models/encuesta3.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class Encuesta3ProviderService {

  constructor(private httpService:HttpService) { }
  public postEncuesta3(encuesta3: any): Observable<Encuesta3>{
  return this.httpService.post('/encuesta3/add',encuesta3);
  };
}
