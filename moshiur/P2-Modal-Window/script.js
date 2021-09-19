'use strict';


let allButtons = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let closeElement = document.querySelector(".close-modal");
let overlayElement = document.querySelector(".overlay");


for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function() {
        modal.classList = "modal";
        overlayElement.className = "overlay";
    });    
}

const closeModal = () => {
    modal.classList = "modal hidden";
    overlayElement.className = "overlay hidden";
};

closeElement.addEventListener("click", closeModal);
overlayElement.addEventListener("click", closeModal);

// Keyboard 
document.addEventListener("keydown", function(event) { 
    if (event.key == "Escape") {
        closeModal();
    }
});

// add an extra button 

let divElement = modal.appendChild("div");
let buttonElement = modal.appendChild("button");
buttonElement.innerText = "Click Me!"
buttonElement.addEventListener("click", closeModal);

divElement.append(buttonElement);
modal.append(divElement);

