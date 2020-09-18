function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// const reasonsArray = [
//     "You use the cry laughing emoji in nonsensical places.",
//     "You said, \"I'm vegan, if it makes a difference,\" in a context that suggested that you were trying to score points.",
//     "You kept asking me questions about \"parents,\" and didn't take the hint when I kept answering them with \"well, my mum...\" and even though I don't feel like you did anything wrong and I hate it when people expect other people to be mindreaders and so I acknowledge that I'm being hypocritical right now, it's just like, come on man.",
//     "I've never seen you speedrun anything.",
//     "You think that the fact that you're tall matters.",
//     "Two words: BATHROOM. CARPET.",
//     "I hate your dad.",
//     "You said that you were in an abusive relationship because I called you \"Sparkles the Magic Monkey.\"",
//     "You sent a \"Hello?? You there??\" type of message when I didn't respond literally immediately.",
//     "You asked me, \"What's BioShack?\"",
//     "Your breath.",
//     "I hate you.",
//     "You remind me of Patrick Bateman.",
//     "You're painfully unfunny and you act like it's my fault that I can't convincingly laugh at things that are just... not.",
//     "Your Hitler Youth haircut.",
//     "I'm sorry; who are you?",
//     "You're a literal sex offender.",
//     "You told a whole bunch of random people that I was your girlfriend, even though I repeatedly told you otherwise. You met my boyfriend! He was nice to you!!",
//     "You tried to use CBT to convince me that the only reason I didn't want to be around you was that I was too negative, when you really should know that the reason that I don't want to be around you is the child porn.",
//     "I always feel like you're about to go home and write a greentext story about me.",
//     "Tomorrow is Monday and I just blehhhhhhhhhh-",
//     "I don't want to."
// ];

const reasonsArray = [
    "...you use the cry laughing emoji in nonsensical places.",
    "...you said, \"I'm vegan, if it makes a difference,\" in a context that suggested that you were trying to score points.",
    "...you kept asking me questions about \"parents,\" and didn't take the hint when I kept answering them with \"well, my mum...\" and even though I don't feel like you did anything wrong and I hate it when people expect other people to be mindreaders and so I acknowledge that I'm being hypocritical right now, it's just like, come on man.",
    "...I've never seen you speedrun anything.",
    "...you think that the fact that you're tall matters.",
    "...two words: BATHROOM. CARPET.",
    "...I hate your dad.",
    "...you said that you were in an abusive relationship because I called you \"Sparkles the Magic Monkey.\"",
    "...you sent a \"Hello?? You there??\" type of message when I didn't respond literally immediately.",
    "...you asked me, \"What's BioShack?\"",
    "...of your breath.",
    "...I hate you.",
    "...you remind me of Patrick Bateman.",
    "...you're painfully unfunny and you act like it's my fault that I can't convincingly laugh at things that are just... not.",
    "...of your Hitler Youth haircut.",
    "...I'm sorry; who are you?",
    "...you're a literal sex offender.",
    "...you told a whole bunch of random people that I was your girlfriend, even though I repeatedly told you otherwise. You met my boyfriend! He was nice to you!!",
    "...you tried to use CBT to convince me that the only reason I didn't want to be around you was that I was too negative, when you really should know that the reason that I don't want to be around you is the child porn.",
    "...I always feel like you're about to go home and write a greentext story about me.",
    "...tomorrow is Monday and I just blehhhhhhhhhh-",
    "...I don't want to.",
    "...you intentionally puked in my sink.",
    "...FUCKING UUUUUUUUGGGGGGGGHHHHH. FUCK.",
    "...just, no.",
    "...I find you upsetting.",
    "...you told me you liked me better on \[redacted\].",
    "...you're too pushy.",
    "...you look too much like me.",
    "...you keep making the same \"joke\" about how I probably don't love you. Yeah, I don't love you. Fucking sue me.",
    "...you told me that I was \"the best of both worlds\" because of my race, and went into disturbing detail about why.",
    "...your breath smells like shit in the most repulsively literal way. This is not an exaggeration. I cannot stress this enough.",
    "...you really don't seem to understand that it's weird if you pay me.",
    "...you're whiny."
];

// const reasonsArray = ["test"];

// alternative colours
// const coloursArray = [
//     "#33a8c7",
//     "#52e3e1",
//     "#a0e426",
//     "#fdf148",
//     "#ffab00",
//     "#f77976",
//     "#f050ae",
//     "#d883ff",
//     "#9336fd"
// ]

const coloursArray = [
    "#362343",
    "#27061a",
    "#501010",
    "#3e010c",
    // "#703301",
    // "#735203",
    // "#404727",
    "#26391F",
    "#193d3f",
    "#1a2d46",
    "#003d5a",
    "#061f25",
    // "#223538",
    "#264D53",
    "#0a4346",
    // "#2d4f31",
    "#1E3C22",
    "#272640",
    "#312244",
    "#3e1f47",
    "#4d194d",
    "#290025",
    "#780c56"
]

let lastReason;
let currentReason;

function displayText() {
    lastReason = currentReason;
    currentReason = randomArrayItem(reasonsArray);
    if (currentReason === lastReason) {
        displayText();
    } else {
        document.getElementById("reason").textContent = currentReason;
    }
}

let lastColour;
let currentColour;

function changeBackground() {
    lastColour = currentColour;
    currentColour = randomArrayItem(coloursArray);
    if (currentColour === lastColour) {
        changeBackground();
    } else {
        document.body.style.backgroundColor = currentColour;
    }
    // document.body.style.backgroundColor = "#9336fd";
    // document.body.style.backgroundColor = "red";
}

function runFunctions() {
    randomArrayItem(reasonsArray);
    displayText();
    changeBackground();
}

window.onload = runFunctions();
document.getElementById("refresh").addEventListener("click", runFunctions);