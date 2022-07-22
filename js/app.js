const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
/*Se crea un arreglo de 3 elementos */
const enlaces = document.querySelectorAll('.navegacion a');
const fecha =document.querySelector('.fecha');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    /*Se va ejecutar hasta que el usuario haga clic*/
    hamburguesa.addEventListener('click',()=>{
        /*Lo oculta o lo muestra al hacer clic */
        navegacion.classList.toggle('ocultar');
        

    });

    
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e) =>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            };
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })


}

/*Hace que salga automaticamente el anio actual*/
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}