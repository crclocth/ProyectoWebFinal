import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;



  constructor( private router:Router) {
    this.checkoutForm = this.createFormGroup();
  }


  ngOnInit(): void {
  }

  public irregistro(){
    this.router.navigate(['visitor/registro'])
  }
  public irolvidar(){
    this.router.navigate(['visitor/olvidar'])
  }
  public irauser(){
    this.router.navigate(['user/'])
  }


  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
     

    });
  }

  onSubmit(){
    
  }
  get usuario() { return this.checkoutForm.get('usuario')?.value; }
  get password() { return this.checkoutForm.get('password')?.value; }
 


  // GUARDAR DATOS EN ARRAY
/*
  public async postUsuario() { 
    let datosFormulario = {

      nombre: this.checkoutForm.get('nombre')?.value,
      usuario: this.checkoutForm.get('usuario')?.value, 
      password: this.checkoutForm.get('password')?.value, 
      passwordtwo: this.checkoutForm.get('passwordtwo')?.value,

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
  }*/

}
