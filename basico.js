document.addEventListener('DOMContentLoaded', () => { 
//Hamburguesa para la version movil              
let navegacion=document.getElementById('navegacion');
let hamburguesa = document.getElementById('hamburguesa');
console.log(navegacion);

hamburguesa.addEventListener('click', ()=>{
    if(navegacion.style.display===''){
    navegacion.style.display = 'block';
    }
    else{
        navegacion.style.display = '';
    } 
})



 


let logo = document.querySelector('.imglogo');
logo.style.animation = 'emergeLogo 2.5s forwards'; 

});