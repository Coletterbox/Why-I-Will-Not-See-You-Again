function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

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
    "...you're whiny.",
    "...I thought that the awful shit you said about black people was a terrible attempt at \"edgy\" humour, but now you're talking about wanting to be a police officer.",
    "...you get angry when I text other people.",
    "...you \"accidentally\" kicked me in the head repeatedly to check if I was really asleep.",
    "...I'm just having a really rough time. It's not you.\r\n\r\nJust kidding. You suck.",
    "...you don't want to actually try. You just want to be broken together, but I'm not broken.",
    "...you think that the funniest kind of humour is what you call \"racial humour\", but you don't manage the \"humour\" part, so you're actually just racist.",
    "...you loaned someone your gun because they wanted to threaten someone.",
    "...you try really hard to seem intelligent, and it's obnoxious.",
    "...you said that you didn't understand my \"accent.\" Why the fuck did you ask me out if you didn't understand what I was saying?",
    "...you're so awkward.",
    "...you're boring. So am I, but it doesn't mean that I'm obligated to put up with this.",
    "...that evening with you genuinely felt like some kind of filibuster was taking place.",
    "...you're just not my best option right now, and I genuinely am sorry about that.",
    "...you can't take a hint.",
    "...if you really can't understand my accent, then why are you still contacting me?",
    "...you claimed that your eyes change colour according to your mood.",
    "...you asked me why I didn't believe in astrology as though it were some kind of weird quirk on my part. Haha, fuck off.",
    "...I feel like you're about to call me a \"normie\" and Naruto-run away.",
    "...you're too tall. Like, how would that even work?",
    "...you're one of those people who's super proud of their interests as though they're achievements, and I just don't respect that.",
    "...I think I may have been into the fact that you're Australian, but you don't still have the accent, so there's kind of no point.",
    "...no.",
    "Fuck off, Michael.",
    "...the way you said you were a \"software engineer\" while I happen to know you're a QA tester just makes me sad. It's like a mirror to my own insecurities. But the thing is that even if I got a Computer Science degree and my job title was \"software engineer\", I'd be thinking about how \"engineer\" is a protected term in some countries, and it wouldn't be enough.",
    "...\"Should of.\" You \"should of\" \[sic\] finished learning English before you started learning Mandarin, you illiterate fetishist.",
    "...you phrased it as \"How will your day be today?\" and that makes me angry for some reason.",
    "...four Asian girlfriends in a row?!",
    "...three Asian girlfriends in a row.",
    "...you keep doing this infantile thing where the things you say aren't what you mean and everything is some kind of tactic or game.",
    "...when someone is not feeling okay and you automatically jump to pretending you've assumed it's because of something to do with environmental issues (because OF COURSE the only things that could affect YOUR mood are issues outside of yourself and your life, and OBVIOUSLY everyone should be the same way), you're being dismissive of the idea that it's valid for someone to be upset about their own life, which would be fine if it were an accidental side effect of you genuinely being this way, but I'm calling bullshit.",
    "...you're the kind of person who takes pictures with famous people just because they're famous.",
    "...I haven't seen you in years and I've forgotten how you sound and how you move, and because of your weird emoji use, all the mannerisms I've started to picture you with are stupid as fuck.",
    "...I really fucking hate this new quirk of yours where you use an exclamation mark instead of a question mark EVERY SINGLE TIME. Why? (\"Why!\") I haven't seen you use a question mark in months, and it's super ridiculous especially when it's shit like, \"How are you!\" just every fucking time.",
    "...holy shit, I did not expect that someone would assume that they were blocked on WhatsApp because a picture disappeared, but what an... interesting... way to find out.",
    "...I know Reddit teaches you incels about \"breaking the touch barrier\"... You're supposed to gauge the person's reaction; it's not supposed to be like, \"Okay, I've touched her elbow, so that means I've given myself consent to go further.\"",
    "...I would have rather woken up in a less... interesting way.",
    "...you're not a good enough distraction.",
    "...I wonder if you'd be so arrogant if you knew that your flat smells like sewage.",
    "...if you play hard to get, I'm calling your bluff. How many chances did you think you had?",
    "...the thing you told me in October 2020 was the thirstiest shit I've ever heard and it still pops into my head sometimes.",
    "...I'm too used to not having you around or speaking to you or thinking about you, now.",
    "...I don't have your number anymore.",
    "...other people actually put the effort in and don't have a one-track mind. I'm still rooting for you, but you're going to run out of time.",
    "...if random people on the internet are good enough for you, I don't want you anymore. That would just be a waste.",
    "...you got distant, so I lost interest. I used to really want to hear from you. Now when I see your name, I'm disappointed.",
    "...I need to at least be able to convincingly role-play thinking you're smarter than me.",
    "...once I start waking up to texts from someone, it's pretty hard for anyone else to compete.",
    "...I really wish I could keep convincing myself that you didn't not care about me, but you won't give me the tiniest reason. I don't remember the last time you even pretended.",
    "...every time I feel like I have to let someone go but I'm finding it hard, I imagine them doing The Thing That They Do That's Super Embarrassing, and without intervention that image gradually gets burned in my mind.",
    "...you\'re taking up a slot in my mind that I need to fill with someone I can talk to.",
    "...it\'s not my fault you can\'t be nice unless you\'re in a good mood.",
    "...it was always insulting how little effort you seemed to think I deserved.",
    "...you chose to let me believe that you weren\'t interested. It\'s too late to be upset that it worked.",
    "...you\'re a pervert and your SJW-ness always feels performative.",
    "...your attempts to not look needy or desperate have just been dickish and neglectful.",
    "...I\'m fed up of people whose insecurities make them decide to play hard to get for more validation, or to protect themselves - whichever - just stop being selfish.",
    "...you lied about your height by SIX INCHES when your real height was fine. Why?",
    "...you waited three days to text me; two exes and multiple new people hit me up in that time.",
    "...I can either let you take me for granted forever, or let you go and relish the thought of you getting rejected by people that, in your eyes, don\'t even compare to me.",
    "...you\'re not even that nice to me, and when I (gently) point it out, you get angry.",
    "...the bar was on the fucking ground. All you had to do was stay in regular contact and be nice to me most of the time and you would have won.",
    "...it always felt like your aim was to put in the minimum amount of effort needed to get what you wanted out of me. I miss the time when you at least thought that more than a brief interaction once a week was enough to keep me around.",
    "...other people value me more, and it\'s insulting that you don\'t realise that. Or maybe you figured out that I liked you better, and you started to take advantage.",
    "...I can see that you\'re just going to continue to be mean as hell and try to bring me down every time you remember that I\'m not exclusively yours, even though you\'ve never attempted to make that happen. You don\'t want to commit to treating me properly and actually being there, but you want me to somehow not have better options.",
    "...you will always get defensive if I have an issue with you, and nothing will ever be fixed.",
    "...I have a rule against fucking anyone I've ever not been in contact with for 60 days, and that was all you seemed to want out of me anyway.",
    "...it feels weirdly peaceful finally knowing that you really were just using me, after over a year of being confused. I realise now that I did nothing wrong to make you stop being nice to me - you just didn\'t feel like you had a use for me anymore. And I did nothing to make you stop putting effort in - I\'m just too far away to be of use. You wondered why I wasn\'t enjoying it, and now you\'ll never get your answers, but I have mine.",
    "...I suddenly remembered the version of you that made me like you so much, and it feels terrible. That person is long gone, and I need to stop hoping he\'s still in there, somewhere."
];

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
}

function runFunctions() {
    randomArrayItem(reasonsArray);
    displayText();
    changeBackground();
}

window.onload = runFunctions();
document.getElementById("refresh").addEventListener("click", runFunctions);
