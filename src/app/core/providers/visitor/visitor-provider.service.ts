import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class VisitorProviderService {

  constructor(private httpService:HttpService) { 

  }
  public postUser(user: any): Observable<User>{
    return this.httpService.post('/user/add',user);
  };

}
