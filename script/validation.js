
//Globale variabele
let button


//DOM
const getDOMElements = function () {
    button = document.querySelector('.c-button');
}

//Button event

const listenToClickButton = function () {
    button.addEventListener('click', changeText);
}

function changeText() {
    button.innerHTML = "Thanks for subscribing!";
}




const validation = function () {

    //DOM elementen

    const form = document.querySelector(".form");

    const email = document.querySelector('.c-input').value;


    const text = document.querySelector('.js-error-message');


    //Verificatie
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email adress is valid";
        text.style.color = "#84c9d1";

    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter a valid email adress";
        text.style.color = "#fc4444";

        if (email == "") {
            form.classList.remove("valid");
            form.classList.add("invalid");
            text.innerHTML = "";
            text.style.color = "#84c9d1";
        }
    }
}




document.addEventListener("DOMContentLoaded", function () {
    //check of de pagina juist laadt
    console.log("DOM loaded");

    getDOMElements();

    listenToClickButton();





})



