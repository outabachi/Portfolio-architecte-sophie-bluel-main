import token from "./token.js";
function addPhoto(e) {
    let input = e.target;
    let image = document.querySelector('#upload img');
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
        image.style.display = "flex";
    }
}
let btnInput = document.getElementById("file");

btnInput.addEventListener('change', addPhoto);

let submit = document.getElementById("form_2");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    let image = document.getElementById("file").files[0];
    let title = document.getElementById("title").value;
    let category = document.getElementById("optionInput").value;
    // Fonction pour obtenir la valeur numérique associée à la catégorie
    function getCategoryValue(category) {
        switch (category) {
            case "Objets":
                return 1;
            case "Appartements":
                return 2;
            case "Hotels & restaurants":
                return 3;
        }
    }
    let formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", getCategoryValue(category));
    fetch("http://localhost:5678/api/works", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                window.alert("Merci de remplir correctement tout les champs");
            }
        })
        .then(data => {
            console.log(data);
        })

})
