$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

/*Constante permettant de gerer la valeur plus petite et grande possible, dans cet exemple minimum la valeur pourra prendre est 1
et la plus grande 100*/
const int MAX = 100, MIN = 1;

/*Fonction permettant de vérifier la valeur entrée*/
function verifier() {
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Plus";
}

	if ($proposition.value == reponse) {
        $resultat.innerHTML = "Tout Pile, Bravo, Félicitations !";
}

	if ($proposition.value < reponse) {
        $resultat.innerHTML = "Moins";
    }
}
$bouton.onclick = verifier;