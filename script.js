function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const reasonsArray = [
    "You use the cry laughing emoji in nonsensical places.",
    "You said, \"I'm vegan, if it makes a difference,\" in a context that suggested that you were trying to score points.",
    "You kept asking me questions about \"parents,\" and didn't take the hint when I kept answering them with \"well, my mum...\" and even though I don't feel like you did anything wrong and I hate it when people expect other people to be mindreaders and so I acknowledge that I'm being hypocritical right now, it's just like, come on man.",
    "I've never seen you speedrun anything.",
    "You think that the fact that you're tall matters.",
    "Two words: BATHROOM. CARPET.",
    "I hate your dad.",
    "You said that you were in an abusive relationship because I called you \"Sparkles the Magic Monkey.\"",
    "You sent a \"Hello?? You there??\" type of message when I didn't respond literally immediately.",
    "You asked me, \"What's BioShack?\"",
    "Your breath.",
    "I hate you.",
    "You remind me of Patrick Bateman.",
    "You're painfully unfunny and you act like it's my fault that I can't convincingly laugh at things that are just... not.",
    "Your Hitler Youth haircut."
];

function displayText() {
    document.getElementById("reason").textContent = randomArrayItem(reasonsArray);
}

function runFunctions() {
    randomArrayItem(reasonsArray);
    displayText();
}

window.onload = runFunctions();
document.getElementById("refresh").addEventListener("click", runFunctions);