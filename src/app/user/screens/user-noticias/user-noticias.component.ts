import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-noticias',
  templateUrl: './user-noticias.component.html',
  styleUrls: ['./user-noticias.component.less']
})
export class UserNoticiasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public irainfo1(){
    this.router.navigate(['user/user-informacion1'])
  }
  public irainfo2(){
    this.router.navigate(['user/user-informacion2'])
  }
  public irainfo3(){
    this.router.navigate(['user/user-informacion3'])
  }
  public irainfo4(){
    this.router.navigate(['user/user-informacion4'])
  }
}
