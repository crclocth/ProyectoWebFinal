import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-encuestas',
  templateUrl: './admin-encuestas.component.html',
  styleUrls: ['./admin-encuestas.component.less']
})
export class AdminEncuestasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public irencuesta1(){
    this.router.navigate(['admin/encuesta1'])
  }
  public irencuesta2(){
    this.router.navigate(['admin/encuesta2'])
  }
  public irencuesta3(){
    this.router.navigate(['admin/encuesta3'])
  }

}
