import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;

  constructor() { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
      passwordtwo: new FormControl('',[Validators.required]),

    });
  }

  onSubmit(){
    this.mensaje="Se guardaron los datos.";
    this.isDivVisible=true;
  }

  get nombre() { return this.checkoutForm.get('nombre');}
  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }
  get passwordtwo() { return this.checkoutForm.get('passwordtwo');}

}
