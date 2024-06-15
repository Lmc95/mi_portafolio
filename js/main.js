const menuBtn = document.getElementById('btn_menu');
const headerA = document.querySelector('.cont_header');
const menuA = document.querySelector('.menu_header');
const botonMenu = document.getElementById('btnM');

const listMenu = document.querySelectorAll('.opcion_menu');

menuBtn.addEventListener('click', (e) => {
    if (!menuA.classList.contains('menu_activo')) {
        abrirMenu();
    } else {
        cerrarMenu();
    }
})

listMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        cerrarMenu();
    })
});

const abrirMenu = () => {
    botonMenu.classList.add('fa-xmark');
    botonMenu.classList.remove('fa-bars');
    menuA.classList.add('menu_activo');
    headerA.classList.add('cont_header_activo');
    document.body.style.overflow = 'hidden';
}
const cerrarMenu = () => {
    botonMenu.classList.add('fa-bars');
    botonMenu.classList.remove('fa-xmark');
    menuA.classList.remove('menu_activo');
    headerA.classList.remove('cont_header_activo');
    headerA.style.backgroundColor = 'none'
    document.body.style.overflow = 'auto';
}