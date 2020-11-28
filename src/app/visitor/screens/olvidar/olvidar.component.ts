import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RecuperarProviderService } from '../../../core/providers/recuperar/recuperar-provider.service';


@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.component.html',
  styleUrls: ['./olvidar.component.less']
})
export class OlvidarComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;



  constructor( private router:Router, private recuperarProviderService: RecuperarProviderService) {
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


  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      

    });
  }

  onSubmit(){
    
  }
  get usuario() { return this.checkoutForm.get('usuario')?.value; }
 



  public async postRecuoerar() { 
    let datosFormulario = {

      
      email: this.checkoutForm.get('usuario')?.value, 
      

    };
    console.log(datosFormulario);
    try {
      this.mensaje="Se guardaron los datos.";
      this.isDivVisible=true;
      await this.recuperarProviderService.postRecuperar(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir el usuario");
    } 
  }
}
