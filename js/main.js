/*===================== MOSTRAR MENÚ =======================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===================== MOSTRAR MENÚ =======================*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===================== OCULTAR MENÚ =======================*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===================== ELIMINAR MENÚ MÓVIL =======================*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu');
    //  Cuando hacemos clic en un enlace, eliminamos la clase 'show-menu' del menú
   navMenu.classList.remove('show-menu'); 
}

navLink.forEach(n => n.addEventListener('click',linkAction));

