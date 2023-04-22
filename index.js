// Write your code here!
const removingmain = document.getElementById("main");
removingmain.remove();

const newHeader = document.createElement("h1")
document.body.appendChild(newHeader);

newHeader.id = "victory";

newHeader.textContent = "Amdjed is the champion";