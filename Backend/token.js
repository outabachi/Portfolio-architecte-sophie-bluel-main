let editions = document.querySelectorAll(".edition");
let userId = window.localStorage.getItem("userId");
let token = window.localStorage.getItem("token");
console.log(editions)
console.log(userId)
console.log(token)
if (token && userId) {
    console.log(userId)
    console.log(token)
    editions.forEach(edition => {
        edition.style.display = "flex";
    });
    
}