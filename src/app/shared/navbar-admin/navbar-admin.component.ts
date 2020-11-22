import { Component, OnInit } from '@angular/core';
import { ɵHammerGesturesPlugin } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.less']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  
  public getUrl():string{
    return this.route.url;
  }
}
