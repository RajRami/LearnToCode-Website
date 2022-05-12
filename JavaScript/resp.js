burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
logo = document.querySelector('.logo');
ul = document.querySelector('.nav-list');
search = document.querySelector('.search');

burger.addEventListener('click', ()=>{
    logo.classList.toggle('visibility-resp'),
    ul.classList.toggle('visibility-resp'),
    search.classList.toggle('visibility-resp'),
    navbar.classList.toggle('h-nav-resp')
});