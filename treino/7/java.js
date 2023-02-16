let menu = document.querySelector('#menu');
let guias = document.querySelector('.guias');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    guias.classList.toggle('open');
}