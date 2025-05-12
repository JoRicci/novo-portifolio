let btn_abrir = document.getElementById('btn-abrir');
let menu = document.getElementById('menu-mobile');
let over = document.getElementById('overlay-menu');

btn_abrir.addEventListener('click', () => {
    menu.classList.add('menu_aberto');
});

menu.addEventListener('click', () => {
    menu.classList.remove('menu_aberto');
});

over.addEventListener('click', () => {
    menu.classList.remove('menu_aberto');
});

window.revelar = ScrollReveal({rest:true})

revelar.reveal('.topo_site_title', {
    duration:2000,
    distance:'-90px'
});

revelar.reveal('.topo_site_img', {
    duration:2000,
    distance:'90px',
    delay:'500'
});

