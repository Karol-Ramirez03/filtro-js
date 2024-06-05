import { LitElement,html,css } from "lit";
import { masaCorporal } from "./masaCorporal/calcularMasa";
import { tabladinamica } from "./tabla/datos";


export class paginaInicial extends LitElement {  
  constructor() {
    super()
  }

  render(){
    return html`
    <link rel="stylesheet" href="styles.css" />

    <div class="contenedor">
      <div class="contenedor_listas">
        <ul class="lista">
          <li class="masacorporal" @click="${this.masacorporal}">
            <a href="#">
              <p>ejercicio 1</p>
            </a>
          </li>
          <li>
            ejercicio 2
          </li>
          <li class="tabla" @click="${this.tabla}">
            <a href="#">
              <p>ejercicio 3</p>
            </a>
          </li>
        </ul>

      </div>
      <div class="info">
        hola
      </div>
  </div>
    `
  }
  masacorporal(){
    const info= this.shadowRoot.querySelector('.info')
    info.innerHTML=''
    const elemento =document.createElement('masa-corporal')
    info.appendChild(elemento)


  }
  tabla(){
    const info= this.shadowRoot.querySelector('.info')
    info.innerHTML=''
    const elemento =document.createElement('tabla-dinamica')
    info.appendChild(elemento)


  }
}
customElements.define('pagina-inicial',paginaInicial)