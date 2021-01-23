// cibler l'élément nav avec son id
let nav = document.getElementById("nav"),

    // cibler l'élément avec la class logo 
    logo = document.querySelector('.logo'),

    // autre façon de cibler le meme element : avec l'efant d'element nav
    // let logo = nav.firstElementChild.firstElementChild;

    // declare une variable avec une valeur de position initial de nav
    offsetTop = nav.offsetTop;

// declarer une function displayNav
let displayNav = () => {

    // tester condition si scrollPage supérieur à la position offsetTop
    if (window.pageYOffset > offsetTop) {

        // ajout fixed à la position de nav
        nav.style.position = 'fixed';

        // ajout une valeur à maxWidth de logo
        logo.style.maxWidth = 100 + "%";

    } else {
        // changer la position en relative
        nav.style.position = 'relative';

        // remettre à 0 la valeur de maxWidth
        logo.style.maxWidth = 0;
    }
}

// ajouter un écoteur à window lors de scroll et lui appliquer la function displayNav
window.addEventListener('scroll', displayNav);