import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http/http.service';
import { UserService } from './services/user/user.service';
import { VisitorService } from './services/visitor/visitor.service';
const Services= [
    HttpService,
    UserService,
    VisitorService,
];
@NgModule ({
    declarations:[
    ],
    imports:[CommonModule],
    providers: [...Services]
})
export class CoreModule{
    
}