import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Sugerencia } from '../../models/sugerencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugerenciasProviderService {

  constructor(private httpService:HttpService) { }
  public postSugerencia(sugerencia: any): Observable<Sugerencia>{
    return this.httpService.post('/sugerencia/add',sugerencia);
  };
}
