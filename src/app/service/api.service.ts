import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Movimiento{
  idmovimientos:number;
  concepto:string;
  cantidad:number;
  descripcion:string;
  idsaldo:number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getMovimientos(){
    return this.http.get("http://localhost:8080/getMovimientos");
  }

  getMovimiento(id:string){
    return this.http.get("http://localhost:8080/getMovimiento/"+id);
  }

  putMovimiento(id:string,putData){
    return this.http.put("http://localhost:8080/updateMovimiento/"+id,null,{params:putData});
  }

  poshMovimiento(postData){
    return this.http.post("http://localhost:8080/addMovimiento",null,{params:postData});
  }

  deleteMovimiento(id:string){
    return this.http.delete("http://localhost:8080/deleteMovimiento/"+id);
  }
}
