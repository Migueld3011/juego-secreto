let numeroSecreto = 0 ;
let intentos  = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;

function asignarTextoElemento(elemento,texto) { 
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto ;
     return;
};

function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    console.log (intentos)
    console.log (numeroSecreto)
     console.log (numeroDeUsuario === numeroSecreto);
     if (numeroDeUsuario === numeroSecreto) { 
       asignarTextoElemento ("p ", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? `vez` : `veces`} `)   
      document.getElementById(`reiniciar`).removeAttribute(`disabled`)
      
     } else {
         if (numeroDeUsuario > numeroSecreto) {
           asignarTextoElemento ("p", "Fallaste el numero es menor")
          } else {
          asignarTextoElemento ("p","Fallaste el numero es mayor" )
          }
     intentos++
     limpiarCaja();
     return;}

     }
function limpiarCaja() {
          let valorCaja = document.querySelector('#valorUsuario');
          valorCaja.value = "";
        }

function generarNumeroSecreto()  {
      let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
          console.log (numeroGenerado);
          console.log (listaNumerosSorteados);
          // si ya sorteamos todos los numeros
          if (listaNumerosSorteados.length == numeroMaximo) {
    
               asignarTextoElemento (`p`,`ya se sortearon todos los numeros posibles`);
          } else {
          //si el numero generado esta incluido en la lista 

          if (listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto()
          } else {
               listaNumerosSorteados.push(numeroGenerado);
               return numeroGenerado;
          }
     }

} 
function condicionesIniciales( ){
     asignarTextoElemento ('h1','juego del numero secreto actualizado')    
     asignarTextoElemento (`p`,`Indica un numero del 1 al ${numeroMaximo}`)
     numeroSecreto = generarNumeroSecreto();
     intentos =  1;
}  
function reiniciarJuego() {
     //limpiar caja
     limpiarCaja();
     //indicar mensajes de intervalode numeros 
     //generar el numero aleatorio
     // inicializar el numero de intentos 
     condicionesIniciales();
     //deshabilitar el boton de nuevo juego
     document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`)
     
}

condicionesIniciales();
//let titulo = document.querySelector(`h1`);
//titulo.innerHTML = `Juego del numero secreto`

//let parrafo = document.querySelector (`p`);
//parrafo.innerHTML = `Indica un numero del 1 al 10`




