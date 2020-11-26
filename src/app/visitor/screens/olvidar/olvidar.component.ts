import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.component.html',
  styleUrls: ['./olvidar.component.less']
})
export class OlvidarComponent implements OnInit {

  checkoutForm1: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor() { 
    this.checkoutForm1 = this.createFormGroup();
  }

  ngOnInit(): void {
  }
  createFormGroup() {
    return new FormGroup({
      usuario1: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")])
    });
  }
  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }
  get usuario1() { return this.checkoutForm1.get('usuario'); }
}
