const shirt = document.querySelector(".shirt");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
let translation = 0;
function nextClicked () {
    translation += 100;
    shirt.style.transform = `translate(-${translation}vw)`;
}

function previousClicked () {
    translation -= 100;
    shirt.style.transform = `translate(-${translation}vw)`;
    
}

nextButton.addEventListener("click", nextClicked);
previousButton.addEventListener("click", previousClicked);