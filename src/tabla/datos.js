import { LitElement,css,html } from "lit";


export class tabladinamica extends LitElement{
    constructor(){
        super()
     
    }
    render(){
        return html`
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="bootstrap.min.css" />

        <div class='divform'>
            <div class='divMasa'>
            <form class='frmname'>
            <div class='inp'>
                <label for="name">ingresa tu nombre</label>
                <input  name="name" type="text" placeholder="name">
            </div>
            <div class='inp'>
                <label for="edad">ingresa tu edad</label>
                <input name="edad" type="number">
            </div>
            <button class="btn-black" @click="${this.imagendata}">subir</button>
            </form>
        
            </div>
                <table class="table">
                    <thead>
                        <tr>
                        
                        <th scope="col">name</th>
                        <th scope="col">edad</th>
                        <th scope="col">accion</th>
                        </tr>
                    </thead>
                    <tbody class="datos">
                        
                    </tbody>
                </table>
        </div>
        
        `
    }
    imagendata(e){
        e.preventDefault()
        const form = this.shadowRoot.querySelector('.frmname')
        const data = Object.fromEntries(new FormData(form).entries())
        const dataP = JSON.parse(JSON.stringify(data))
        const {name,edad} = dataP
        const datoname = name
        const datoedad = edad
        
        const info= this.shadowRoot.querySelector('.datos')
        
        info.innerHTML+= `
        <tr>
            <td scope="row">${datoname}</td>
            <td>${datoedad}</td>
            <td><button>borrar</button></td>
        </tr>
          
    `;
        
    }
}
customElements.define('tabla-dinamica',tabladinamica)