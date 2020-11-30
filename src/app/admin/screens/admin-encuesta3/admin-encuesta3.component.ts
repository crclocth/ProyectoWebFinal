import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Encuesta3ProviderService } from '../../../core/providers/encuesta3/encuesta3-provider.service';

@Component({
  selector: 'app-admin-encuesta3',
  templateUrl: './admin-encuesta3.component.html',
  styleUrls: ['./admin-encuesta3.component.less']
})
export class AdminEncuesta3Component implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;


  constructor(private encuesta3ProviderService: Encuesta3ProviderService) {
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

  public async postEncuesta3() { 
    let datosFormulario = {

      
      email: this.checkoutForm.get('usuario')?.value, 
      mensaje: this.checkoutForm.get('tex')?.value,

    };
    console.log(datosFormulario);
    try {
      this.mensaje="Se guardaron los datos.";
      this.isDivVisible=true;
      await this.encuesta3ProviderService.postEncuesta3(datosFormulario).toPromise();
    }
    catch (error) {
      alert("Error al añadir la encuesta 3");
    } 
  }

}
