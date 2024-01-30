let buttonModale = document.getElementById("modify");
let modale = document.getElementById("modale_1");
let mainContainer = document.getElementById('main-container');
let croix1 = document.getElementById('croix_1');
let body = document.querySelector('body');
let modale2 = document.getElementById("modale_2");
let fleche = document.getElementById("fleche");
let croix2 = document.getElementById('croix_2');
let btnAjouterUnePhoto = document.getElementById("btn_modale_1");

buttonModale.addEventListener("click", () => {
    modale.style.display = "flex";
    body.style.overflow = "hidden";
    mainContainer.style.opacity = "0.2";

    // Utilisez un écouteur d'événements à capture pour éviter la propagation de l'événement
    mainContainer.addEventListener("click", fermerModaleDehors, true);
});

croix1.addEventListener("click", () => {
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
        modale2.style.display = "none";
        body.style.overflow = "";
        mainContainer.style.opacity = "1";

        // Retirez l'écouteur d'événements après avoir fermé la modale
        mainContainer.removeEventListener("click", fermerModaleDehors, true);
    }
}
btnAjouterUnePhoto.addEventListener("click", () => {
    modale.style.display = 'none';
    modale2.style.display = 'flex';
})

croix2.addEventListener("click", () => {
    modale.style.display = "none";
    modale2.style.display = "none";
    body.style.overflow = "";
    mainContainer.style.opacity = "1";
});

fleche.addEventListener("click", ()=>{
    modale2.style.display = 'none';
    modale.style.display = 'flex';
})