const commonClosers = [  "And that's no joke", "It’s bloody complicated", "BUCKO", "You know",
"It’s like...", "Get your act together.", "these stories are old. I mean, really old.", 
"That’s it... In my estimation", "Obviously", "It is no joke!",];

const commonOpeners = [ "That's a bloody complicated question", "And so..", "Let's give the devil his due..",  
"Fundamentally...", "It is no joke!", "Devil is in the details", "As far as I'm concerned", "It’s like, no", "What would you say..",
"let's say", ];

const mainQuotes = [ `If you can't understand why someone is doing something, look at the consequences of their actions, whatever
 they might be, and then infer the motivations from their consequences`,
`if you think tough men are dangerous, wait until you see what weak men are capable of.`,
`If you fulfill your obligations everyday you don't need to worry about the future.`,
`Perhaps you are overvaluing what you don’t have and undervaluing what you do.`,
`If you are not willing to be a fool, you can't become a master`,
`In order to be able to think, you have to risk being offensive`,
`You don't get to choose not to pay a price, you only get to choose which price you pay`,
'The successful among us delay gratification. The successful among us bargain with the future',
`Nietzsche said that a man’s worth was determined by how much truth he could tolerate`,
`The secret to your existence is right in front of you. It manifests itself as all those things you know you should do, but are avoiding`,
];

const whyArr = [mainQuotes[0], mainQuotes[1], mainQuotes[5], mainQuotes[7], mainQuotes[8]];
const whatArr = [mainQuotes[2], mainQuotes[3], mainQuotes[4], mainQuotes[6], mainQuotes[9]];

const questions = ["Why do people do what they do", "What should I do moving forward?", "Give me some advice"];
const randomAdvice = mainQuotes[Math.floor(Math.random() * mainQuotes.length)];
const randomOpener = commonOpeners[Math.floor(Math.random() * commonOpeners.length)];
const randomCloser = commonClosers[Math.floor(Math.random() * commonClosers.length)];
const randomWhy = whyArr[Math.floor(Math.random() * whyArr.length)];
const randomWhat = whatArr[Math.floor(Math.random() * whatArr.length)];

console.log(randomQuestion);

function answerQuestion(question) {
    switch(question) {
        case "Why do people do what they do": console.log(`${randomOpener}, ${randomWhy}. ${randomCloser}`);
        break;
        
        case "What should I do moving forward?": console.log(`${randomOpener}, ${randomWhat}. ${randomCloser}`);
        break;

        case "Give me some advice": console.log(`${randomOpener}, ${randomAdvice}. ${randomCloser}`);
        break;

        default: console.log("Invalid request");
    };
};

answerQuestion("Why do people do what they do");


/*console.log(mainQuotes.length);
console.log(commonClosers.length);
console.log(commonOpeners.length);*/