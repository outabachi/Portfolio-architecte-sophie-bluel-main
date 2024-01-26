// export de la fonction deleteWorks
export default deleteWorks
function deleteWorks() {
    let poubellesList = document.querySelectorAll(".gallery-modale span");

    poubellesList.forEach((poubelle) => {
        poubelle.addEventListener("click", () => {
            let figureElement = document.querySelector("figure");
            figureElement.remove();
            fetch("http://localhost:5678/api/works/" + poubelle.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
        });
    });
}
