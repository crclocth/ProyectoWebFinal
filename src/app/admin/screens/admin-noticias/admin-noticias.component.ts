import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-noticias',
  templateUrl: './admin-noticias.component.html',
  styleUrls: ['./admin-noticias.component.less']
})
export class AdminNoticiasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public irainfo1(){
    this.router.navigate(['admin/admin-informacion1'])
  }
  public irainfo2(){
    this.router.navigate(['admin/admin-informacion2'])
  }
  public irainfo3(){
    this.router.navigate(['admin/admin-informacion3'])
  }
  public irainfo4(){
    this.router.navigate(['admin/admin-informacion4'])
  }
}
