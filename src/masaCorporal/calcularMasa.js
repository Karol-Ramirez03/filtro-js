import { LitElement,css,html } from "lit";


export class masaCorporal extends LitElement{
    static style = css`
    :host{
        width: 100%;
        height: 100%;
    }
    `
    constructor(){
        super()
        this.imagen=false
    }
    render(){
        return html`
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="bootstrap.min.css" />

        <div class='divMasa'>
            <form class='frmMasa'>
            <div class='inp'>
                <label for="peso">ingresa tu peso por favor</label>
                <input  name="peso" type="number" placeholder="hola">
            </div>
            <div class='inp'>
                <label for="altura">ingresa tu altura</label>
                <input name="altura" type="number">
            </div>
            <button class="btn-black" @click="${this.imagendata}">subir</button>
            </form>
            <div class='imagen'>
            
            </div>
        </div>
        
        `
    }
    imagendata(e){
        e.preventDefault()
        const form = this.shadowRoot.querySelector('.frmMasa')
        const data = Object.fromEntries(new FormData(form).entries())
        const dataP = JSON.parse(JSON.stringify(data))
        const {peso,altura} = dataP
        const datoPeso = peso
        const datoAltura = altura
        let img =''
        let text = ''
        let dato = peso/(altura*altura)
        if (dato < 24.9){
            img = 'img/poquito.png'
            text= 'por debajo del peso normal'
        
        }else if (dato < 59.9){
            img = 'img/poco.jpg'
            text= 'peso normal'
        }else {
            img = 'img/sobrepeso.jpg'
            text= 'sobrepeso'
        }
        const info= this.shadowRoot.querySelector('.imagen')
        info.classList.add('imagenes')
        info.innerHTML= `
   
        <img src=${img} alt="">
        <p class="card-text">${text}</slot></p>
          
    `;
        
    }
}
customElements.define('masa-corporal',masaCorporal)