import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.less']
})
export class NoticiasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public irainfo1(){
    this.router.navigate(['visitor/informacion1'])
  }
  public irainfo2(){
    this.router.navigate(['visitor/informacion2'])
  }
  public irainfo3(){
    this.router.navigate(['visitor/informacion3'])
  }
  public irainfo4(){
    this.router.navigate(['visitor/informacion4'])
  }
}
