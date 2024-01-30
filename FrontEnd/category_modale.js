let options = document.getElementById("options");
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/categories")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(categories => {
        for (let category of categories) {
            let option = document.createElement('option');
            option.value = category.name;
            option.dataset.categoryId = category.id;
            option.innerText= category.name;
            options.appendChild(option);
        
        }
        
    })
