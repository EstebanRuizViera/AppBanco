import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.page.html',
  styleUrls: ['./form-update.page.scss'],
})
export class FormUpdatePage implements OnInit {

  constructor(private router:Router,private api:ApiService) { }

  idmovimiento:string;
  concepto:string;
  cantidad:number;
  descripcion:string;
  idSaldo:number;

  ngOnInit() {
  }

  updateEntrada(){
    let putData={
      "concepto":this.concepto,
      "cantidad":this.cantidad,
      "descripcion":this.descripcion,
      "idsaldo":this.idSaldo
    };

    this.api.putMovimiento(this.idmovimiento,putData).subscribe((res)=>{
      window.location.reload();
      this.router.navigateByUrl('menu');
    });
  }
}
