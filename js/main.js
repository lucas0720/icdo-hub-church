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
   navMenu.classList.remove('show-menu'); 
}

navLink.forEach(n => n.addEventListener('click',linkAction));

const heroImage = document.querySelector('.hero__bg-img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const distanciaFrenado = 1000; 
    const crecimientoMaximo = 0.15; 
    let progreso = scrollY / distanciaFrenado;
    if (progreso > 1) progreso = 1;
    const curva = 1 - Math.pow(1 - progreso, 3);

    const scale = 1 + (crecimientoMaximo * curva);

    heroImage.style.transform = `scale(${scale})`;
});