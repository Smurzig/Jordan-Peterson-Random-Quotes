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

const questions = ["Why do people do what they do", "What should I do moving forward?", "Give me some advice"];
const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

console.log(randomQuestion);

function answerQuestion(question) {
    
};




/*console.log(mainQuotes.length);
console.log(commonClosers.length);
console.log(commonOpeners.length);*/