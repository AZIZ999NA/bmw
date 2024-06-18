document.addEventListener('DOMContentLoaded', () => {
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let white = document.getElementById("white");
    let black = document.getElementById("black");
    let carImage = document.getElementById("carImage");

    red.onclick = function () {
        carImage.src = "red.png";
    }

    blue.onclick = function () {
        carImage.src = "blue.png";
    }

    white.onclick = function () {
        carImage.src = "white.png";
    }

    black.onclick = function () {
        carImage.src = "black.png";
    }
});
