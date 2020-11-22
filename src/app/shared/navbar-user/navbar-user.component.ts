import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.less']
})
export class NavbarUserComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  public getUrl():string{
    return this.route.url;
  }
}
