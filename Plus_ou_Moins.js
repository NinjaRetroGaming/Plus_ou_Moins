var aleatoire = Math.floor(Math.random()*101);
var msg = 'Choisis un chiffre entre 1 et 100';

    do {
        
    var essai = prompt(msg);

    if (essai > aleatoire) {
            msg = "Moins";
        }
    else if (essai < aleatoire) {
            msg = "Plus";
        }
    else if (essai == aleatoire) {
            msg = "Good Game, Well Played !";
        }

    else {
            msg = "Game Over, Try Again !";
        }

    } while (essai);