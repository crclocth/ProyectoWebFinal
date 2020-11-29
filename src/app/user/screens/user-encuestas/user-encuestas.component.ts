import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-encuestas',
  templateUrl: './user-encuestas.component.html',
  styleUrls: ['./user-encuestas.component.less']
})
export class UserEncuestasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public irencuesta1(){
    this.router.navigate(['visitor/encuesta1'])
  }
  public irencuesta2(){
    this.router.navigate(['visitor/encuesta2'])
  }
  public irencuesta3(){
    this.router.navigate(['visitor/encuesta3'])
  }
}
