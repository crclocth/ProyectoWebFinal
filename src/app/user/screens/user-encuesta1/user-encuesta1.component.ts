import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Encuesta1ProviderService } from '../../../core/providers/encuesta1/encuesta1-provider.service';

@Component({
  selector: 'app-user-encuesta1',
  templateUrl: './user-encuesta1.component.html',
  styleUrls: ['./user-encuesta1.component.less']
})
export class UserEncuesta1Component implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(private encuesta1ProviderService: Encuesta1ProviderService) {
    this.checkoutForm = this.createFormGroup();
  }


  ngOnInit(): void {
  }




  createFormGroup() {
    return new FormGroup({
      
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      tex: new FormControl('', [Validators.required, ]),

    });
  }

  onSubmit(){
    
  }
  //onReset(){
    //this.checkoutForm.reset();
  //}

  get usuario() { return this.checkoutForm.get('usuario')?.value; }
  get tex() { return this.checkoutForm.get('tex')?.value}

  public async postEncuesta1() { 
    let datosFormulario = {

      
      email: this.checkoutForm.get('usuario')?.value, 
      mensaje: this.checkoutForm.get('tex')?.value,

    };
    console.log(datosFormulario);
    try {
      this.mensaje="Se guardaron los datos.";
      this.isDivVisible=true;
      await this.encuesta1ProviderService.postEncuesta1(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir la encuesta 1");
    } 
  }

}
