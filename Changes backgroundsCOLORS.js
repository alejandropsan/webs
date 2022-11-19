'use strict'
const colors = ["gold", "rgba(233, 30, 99, 1)", "rgba(156, 39, 176, 1)", "rgba(158, 158, 158, 1)", "rgba(0, 150, 136, 1)", "#dbfff3"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}