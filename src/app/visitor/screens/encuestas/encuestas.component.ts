import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.less']
})
export class EncuestasComponent implements OnInit {

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
