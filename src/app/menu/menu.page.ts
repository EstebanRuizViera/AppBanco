import { Component, OnInit, Renderer2 } from '@angular/core';
import { Movimiento, ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  movimientos: Array<Movimiento> = [];

  saldo: number;

  constructor(private api: ApiService,
    private router: Router,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.getAllMovimiento();
  }

  getAllMovimiento() {
    this.api.getMovimientos().subscribe((res: Array<Movimiento>) => {
      this.movimientos = res;
      this.setListMovimientos();
    });

  }

  setListMovimientos() {
    for (let i = 0; i < this.movimientos.length; i++) {
      let lista = document.getElementById("lista");

      let item = document.createElement("ion-item");

      let label = document.createElement("ion-label");

      let parrafo = document.createElement("p");

      let texto = document.createTextNode(this.movimientos[i].concepto);
      parrafo.appendChild(texto);
      label.appendChild(parrafo);
      item.appendChild(label);

      let buttonIon = document.createElement("button");
      this.renderer.setAttribute(buttonIon, "ion-button", "");
      this.renderer.setAttribute(buttonIon, "id", this.movimientos[i].idmovimientos.toString());
      this.renderer.listen(buttonIon,"click",(event)=>{
        this.api.deleteMovimiento(this.movimientos[i].idmovimientos.toString()).subscribe(()=>{
          console.log("BORRADO");
          window.location.reload();
        });
      });

      let icono = document.createElement("ion-icon");
      this.renderer.setAttribute(icono, "slot", "icon-only");
      this.renderer.setAttribute(icono, "name", "trash");

      buttonIon.appendChild(icono);
      item.appendChild(buttonIon);

      lista.insertAdjacentElement("afterbegin", item);

      this.saldo += this.movimientos[i].cantidad.valueOf();
    }
  }

  goToFormulario() {
    this.router.navigateByUrl('formulario');
  }

  goToFormUpdate() {
    this.router.navigateByUrl('form-update');
  }

}
