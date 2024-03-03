let dim = document.querySelector('.bttn');

dim.addEventListener("click", function() {
    let body = document.querySelector("body");
    let currentColor = window.getComputedStyle(body).backgroundColor;

    if (currentColor !== "rgb(0, 0, 0)" && currentColor !== "#000000") {
        body.style.backgroundColor = "#000000";
    } else {
        body.style.backgroundColor = "#FFFFFF";
    }
});
