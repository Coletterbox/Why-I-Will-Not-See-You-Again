function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const testArray = ["1", "2", "3"];

function displayText() {
    document.getElementById("reason").textContent = randomArrayItem(testArray);
}

function runFunctions() {
    randomArrayItem(testArray);
    displayText();
}

window.onload = runFunctions();
document.getElementById("refresh").addEventListener("click", runFunctions);