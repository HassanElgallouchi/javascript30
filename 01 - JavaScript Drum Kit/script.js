    // déclarer une variable avec tout les éléments audio
    let audios = document.querySelectorAll('audio');
    // 
    let div = document.querySelectorAll('.keys > div')

    // boucler sur les éléments audio
    for (let index = 0; index < audios.length; index++) {

      // declaree une variable de valeur d'attribute data-key d'élément[index]
      let dataKeyAudio = audios[index].getAttribute('data-key');
      // creer un écouteur sur sur chaque evenement de keydown

      document.addEventListener('keydown', (event) => {
        // vérifier si key code de levent est égale à le key-data dans chaque élément dans le tableau [audio] 
        if (event.keyCode == dataKeyAudio) {

          audios[index].currentTime = 0;
          // chaque élément qui correspond, jouer le son
          audios[index].play();

              // vérifier si la valeur d'attribute data-key est égale à la valeur data-key d'élément div[indexDiv]
              if (dataKeyAudio == div[index].getAttribute('data-key')) {

                // élément div ajout class playing
                div[index].classList.add('playing');
                console.log(div[index]);

                // supprime la class playin d'élément div après 100 Milliseconde
                setTimeout(() => {
                  div[index].classList.remove('playing');
                }, 100);
              };

        };
      });
    };