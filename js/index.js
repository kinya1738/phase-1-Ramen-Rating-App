
document.addEventListener("DOMContentLoaded", main);

function main() {
    displayRamens();
    addSubmitListener();
}

function displayRamens() {
    const ramenMenu = document.querySelector("#ramen-container");

    ramenMenu.innerHTML = "";
    
    document.querySelectorAll("#ramen-menu img").forEach(img => {
        img.addEventListener("click", () => handleClick(img));
    });
}

function handleClick(img) {
    document.getElementById("ramen-name").textContent = img.dataset.name || "Unknown";
    document.getElementById("ramen-restaurant").textContent = img.dataset.restaurant || "Unknown";
    document.getElementById("ramen-rating").textContent = `Rating: ${img.dataset.rating || "N/A"}`;
    document.getElementById("ramen-comment").textContent = img.dataset.comment || "No comment available.";
    document.getElementById("ramen-image").src = img.src;
    document.getElementById("ramen-image").alt = img.dataset.name || "Unknown Ramen";
}

function addSubmitListener() {
    document.getElementById("ramen-form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;
        const imageURL = document.getElementById("image").value;
        
        const newImg = document.createElement("img");
        newImg.src = imageURL;
        newImg.alt = name;
        newImg.dataset.name = name;
        newImg.dataset.restaurant = restaurant;
        newImg.dataset.rating = rating;
        newImg.dataset.comment = comment;
        newImg.addEventListener("click", () => handleClick(newImg));
        
        document.getElementById("ramen-menu").appendChild(newImg);
        document.getElementById("ramen-form").reset();
    });
}
function main(){
  displayRamens();
  addSubmitListener();
}



