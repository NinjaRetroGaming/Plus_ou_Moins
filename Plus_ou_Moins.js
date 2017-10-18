$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

/*Constante permettant de gerer la valeur plus petite et grande possible*/
const int MAX = 100, MIN = 1;

/*Fonction permettant de vérifier la valeur entrée*/
function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Insuffisant !";
}