// declare une function enlargeGallery
let enlargeGallery = () => {

    // cibler les éléments .panel 
    let panels = document.querySelectorAll(".panel");

    // boucler sur le les éléments de array [panels]
    panels.forEach(element => {

        // mettre un écouteur sur chaque élément de array [panels]
        element.addEventListener('click', (e) => {

            // ajout class .open (dans css  à l'élément lorsqu'il est cliquée
            // et retirer lorsqu'il est cliquée une deuxième fois.
            element.classList.toggle('open')

            // mettre l'élément au top de la page
            element.scrollIntoView();

            // vérifier si la class (css) d'élément contient .open
            if (element.classList.contains('open')) {

                // cacher le overflow pour le body
                document.body.style.overflow = 'hidden';
            } else {

                // réinitiliser le overflow
                document.body.style.overflow = '';
            }
        });
    });
}

// appele la function
enlargeGallery()

