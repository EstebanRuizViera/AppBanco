import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private api:ApiService,private router:Router) { }


  concepto:string;
  cantidad:string;
  descripcion:string;
  idSaldo:string;

  ngOnInit() {
  }

  addEntrada(){
    let postData={
      "idmovimientos":0,
      "concepto":this.concepto,
      "cantidad":this.cantidad,
      "descripcion":this.descripcion,
      "idsaldo":this.idSaldo
    }
    this.api.poshMovimiento(postData).subscribe((res)=>{
      
      console.log("biiieeen");
      window.location.reload();
      this.router.navigateByUrl('menu');
      
    });
  }

}
