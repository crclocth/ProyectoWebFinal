import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { VisitorProviderService } from '../../../core/providers/visitor/visitor-provider.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(private visitorProviderService: VisitorProviderService) {
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
    
  }

  get nombre() { return this.checkoutForm.get('nombre')?.value;}
  get usuario() { return this.checkoutForm.get('usuario')?.value; }
  get password() { return this.checkoutForm.get('password')?.value; }
  get passwordtwo() { return this.checkoutForm.get('passwordtwo')?.value;}

  public async postUsuario() { 
    let datosFormulario = {

      nombres: this.checkoutForm.get('nombre')?.value,
      email: this.checkoutForm.get('usuario')?.value, 
      contraseña: this.checkoutForm.get('password')?.value, 
      contraseñaRepetida: this.checkoutForm.get('passwordtwo')?.value,

    };
    console.log(datosFormulario);
    try {
      this.mensaje="Se guardaron los datos.";
      this.isDivVisible=true;
      await this.visitorProviderService.postUser(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el usuario");
    } 
  }
}
