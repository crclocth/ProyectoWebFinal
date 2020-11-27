import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  public checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(
  ) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup(
      {
      mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      nombre: new FormControl('',[Validators.required]),
      rut: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmacion: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    this.mensaje="Su peticion ha sido enviada con exito!";
    this.isDivVisible=true;
  }

  get mail() { return this.checkoutForm.get('mail')?.value; }
  get rut() { return this.checkoutForm.get('rut')?.value; }
  get nombre() { return this.checkoutForm.get('nombre')?.value; }
  get telefono() { return this.checkoutForm.get('telefono')?.value; }
  get password() { return this.checkoutForm.get('password')?.value; }
  get confirmacion() { return this.checkoutForm.get('confirmacion')?.value; }

  // GUARDAR DATOS EN ARRAY

  /*public async postContactoPersonal() { 
    let datosFormulario = {
      mail: this.checkoutForm.get('mail').value,
      rut: this.checkoutForm.get('rut').value,
      nombre: this.checkoutForm.get('nombre').value,
      telefono: this.checkoutForm.get('telefono').value,
      password: this.checkoutForm.get('password').value,
      confirmacion: this.checkoutForm.get('confirmacion').value
    };
    console.log(datosFormulario);
    try {
      await this.contactoPersonalProviderServices.addContactoPersonal(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el contacto");
    } 
  }*/
}
