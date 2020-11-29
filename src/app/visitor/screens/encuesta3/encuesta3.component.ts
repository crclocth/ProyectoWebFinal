import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VisitorProviderService } from '../../../core/providers/visitor/visitor-provider.service';

@Component({
  selector: 'app-encuesta3',
  templateUrl: './encuesta3.component.html',
  styleUrls: ['./encuesta3.component.less']
})
export class Encuesta3Component implements OnInit {

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

  public async postUsuario() { 
    let datosFormulario = {

      
      email: this.checkoutForm.get('usuario')?.value, 
      mensaje: this.checkoutForm.get('tex')?.value,

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
