const top = document.querySelector("#top");
const bottom = document.querySelector("#bottom");
const topContent = document.querySelector("#topimg");
const previousButton = document.querySelector(".previousButton")
let count = 1;
const topStorage = ["red", "blue", "green", "purple"]
topContent.innerHTML = topStorage[0];
function previousClicked (event, count) {
    topContent.innerHTML = topStorage[count];
    count++;
}

previousButton.addEventListener("click", previousClicked);

