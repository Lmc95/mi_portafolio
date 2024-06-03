const menuBtn = document.getElementById('btn_menu');
const headerA = document.querySelector('.cont_header');
const menuA = document.querySelector('.menu_header');

menuBtn.addEventListener('click', () => {
    if(!menuA.classList.contains('menu_activo')){
        menuA.classList.add('menu_activo');
        headerA.classList.add('cont_header_activo');
        document.body.style.overflow = 'hidden';
    } else {
        menuA.classList.remove('menu_activo');
        headerA.classList.remove('cont_header_activo');
        document.body.style.overflow = 'auto';
    }
})