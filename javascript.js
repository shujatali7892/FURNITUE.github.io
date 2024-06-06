let navbar =  document.querySelector('.navbar');

document.querySelector('#menu-tbn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}
let searchform =  document.querySelector('.search-form');

document.querySelector('#search-tbn').onclick = () =>{
    searchform.classList.toggle('active');
    cartitem.classList.remove('active');
    navbar.classList.remove('active');
}
let cartitem =  document.querySelector('.cart-items-container');

document.querySelector('#cart-tbn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}
