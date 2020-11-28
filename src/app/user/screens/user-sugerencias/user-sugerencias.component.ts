import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-sugerencias',
  templateUrl: './user-sugerencias.component.html',
  styleUrls: ['./user-sugerencias.component.less']
})
export class UserSugerenciasComponent implements OnInit {

  checkoutForm2: FormGroup;
  mensaje:string="";
  isDivVisible = false;

  constructor() {
    this.checkoutForm2 = this.createFormGroup();
   }

  ngOnInit(): void {
  }
  createFormGroup() {
    return new FormGroup({
      usuario2: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      asunto: new FormControl('', [Validators.required, ]),
      tex: new FormControl('', [Validators.required, ]),

    });
  }
    onSubmit(){
      this.mensaje="Sugerencia Enviada.";
      this.isDivVisible=true;
    }

    get usuario2() { return this.checkoutForm2.get('usuario2')?.value; }
    get asunto() { return this.checkoutForm2.get('asunto')?.value; }
    get tex() { return this.checkoutForm2.get('tex')?.value}
}
