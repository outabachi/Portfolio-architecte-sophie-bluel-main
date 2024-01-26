let buttonModale = document.getElementById("modify");
let modale = document.querySelector("aside");
let mainContainer = document.getElementById('main-container');
let croix = document.getElementById('croix');
let body = document.querySelector('body');

buttonModale.addEventListener("click", () => {
    modale.style.display = "flex";
    body.style.overflow = "hidden";
    mainContainer.style.opacity = "0.2";

    // Utilisez un écouteur d'événements à capture pour éviter la propagation de l'événement
    mainContainer.addEventListener("click", fermerModaleDehors, true);
});

croix.addEventListener("click", () => {
    modale.style.display = "none";
    body.style.overflow = "";
    mainContainer.style.opacity = "1";

    // Retirez l'écouteur d'événements lorsque la modale est fermée
    mainContainer.removeEventListener("click", fermerModaleDehors, true);
});

function fermerModaleDehors(e) {
    // Vérifiez si l'élément cliqué est en dehors de la modale
    if (!modale.contains(e.target)) {
        modale.style.display = "none";
        body.style.overflow = "";
        mainContainer.style.opacity = "1";

        // Retirez l'écouteur d'événements après avoir fermé la modale
        mainContainer.removeEventListener("click", fermerModaleDehors, true);
    }
}
