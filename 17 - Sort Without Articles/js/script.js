"use strict";

// cibler un élément pour putput
let outPut = document.getElementById("bands");

// cibler le button #srt avec son id
let srt = document.getElementById('srt');

// cibler le button #rst avec son id
let rst = document.getElementById('rst');

// function pour afficherla liste de base [bands]
let restList = () => {
    let accumulateur = "";
    bands.forEach(element => {
        accumulateur += `<li>${element}</li>`;
    });
    outPut.innerHTML = accumulateur;
}

// declare une function displayList
let displayList = () => {
    // declare un accumulateur de text 
    let list = "";
    // declare un array vide 
    let tab = [];
    // boucler sur les éléments dans le tableau [bands]
    bands.forEach(element => {
        // découper l'élément de tableau [bands] par un espace dans la variable element
        // [element] est un array
        element = element.split(" ");
        // si le premier élément est "The" ou "An" ou "A"
        if (element[0] == "The" || element[0] == "An" || element[0] == "A") {
            // redeclare l'élément aprtir de deuxiéme élément
            element = element.slice(1);
        }
        // redeclare l'élément et join tout 
        element = element.join(" ");
        // push élément dans tab
        tab.push(element);
    });
    // trier tab par order alpha
    tab.sort();
    // boucler sur tab et ajouter <li> a chaque tour à la variable list
    tab.forEach(span => list += `<li>${span}</li>`)
    // assigner la list à la variable outPut
    outPut.innerHTML = list;
}
// appele la function displayList
// displayList();

// afficher la liste de base
restList();

// event sur button #srt si click affiche la [list] triée
srt.addEventListener('click', displayList)

// event sur button #rst si click affiche la [list] de base non triée
rst.addEventListener('click', restList)