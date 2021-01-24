// declare un array vide
let inputUser = [];

// declare une function showConify
const showConify = (e) => {

    // le code secret à taper
    let cheatCode = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];

    // si la lengueur de tableau d'éléments taper par utilisatur est plus grande que la lengueur de tableau de code secret
    if (inputUser.length > cheatCode.length - 1) {

        // supprime le premier élément de tableau utilisateur
        inputUser.shift();
    }

    // ajouter event key dans le tableau utilisateur en derniere case
    inputUser.push(e.key)

    // si le contenu des deux tableau est égale 
    if (JSON.stringify(inputUser) == JSON.stringify(cheatCode)) {

        // return la function pour afficher les effets sur le dom
        cornify_add();
    }
}

// 
window.addEventListener('keydown', showConify);