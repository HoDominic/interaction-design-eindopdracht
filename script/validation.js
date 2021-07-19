
//Globale variabele
let button, form, email, text, eventButton;


//DOM
const getDOMElements = function () {
    button = document.querySelector('.c-button');
    eventButton = document.getElementById("eventButton");



};



//Button event

/*
const listenToClickEventButton = function () {
    eventButton.addEventListener('click', prevent);
}


function prevent() {
    eventButton.preventDefault();
}*/


const listenToClickButton = function () {
    button.addEventListener('click', changeText);
}

function changeText() {

    //kleur van achtergrond 
    button.style.background = '';
    button.style.color = "#FFF";



}




const validation = function () {

    //DOM elementen

    form = document.querySelector(".form");
    email = document.querySelector('.c-input').value;
    text = document.querySelector('.js-error-message');
    input = document.querySelector('.c-input');

    //Verificatie
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    /**/

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email adress is valid";
        text.style.color = "#107E0C";
        input.style.borderColor = '#107E0C';

    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter a valid email adress";
        text.style.color = "#ff5b00";
        input.style.borderColor = "#ff5b00";

        if (email == "") {
            form.classList.remove("valid");
            form.classList.add("invalid");
            text.innerHTML = "";
            text.style.color = "#ff5b00";
        }
    }
};




document.addEventListener("DOMContentLoaded", function () {
    //check of de pagina juist laadt
    console.log("DOM loaded");

    getDOMElements();

    listenToClickButton();
    /*listenToClickEventButton();*/

    validation();



})



