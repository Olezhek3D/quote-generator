const quotes = [
    "Discipline is the bridge between goals and accomplishment.",
    "We must all suffer one of two things: the pain of discipline or the pain of regret.",
    "Discipline is choosing between what you want now and what you want most.",
    "Without self-discipline, success is impossible, period.",
    "Discipline yourself and others won’t need to.",
    "Success is nothing more than a few simple disciplines, practiced every day.",
    "The price of excellence is discipline. The cost of mediocrity is disappointment.",
    "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.",
    "The more disciplined you become, the easier life gets.",
    "Self-discipline is the magic power that makes you virtually unstoppable.",
    "Motivation gets you going, but discipline keeps you growing.",
    "Do what needs to be done, even if you don’t feel like it.",
    "The secret to success is discipline and consistency.",
    "Self-control is strength. Right thought is mastery. Calmness is power.",
    "With self-discipline, almost anything is possible.",
    "If you want to be successful, discipline is non-negotiable.",
    "Self-discipline begins with the mastery of your thoughts. If you don’t control what you think, you can’t control what you do.",
    "What lies in our power to do, lies in our power not to do.",
    "Discipline is just choosing between what you want now and what you want most.",
    "At the center of bringing any dream to life is self-discipline.",
    "Discipline is doing what you hate to do, but doing it like you love it.",
    "You will never always be motivated, so you must learn to be disciplined.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Dreams don’t work unless you do.",
    "Your level of success is determined by your level of discipline and perseverance."
];

// Get elements
const result = document.getElementById("myResult");
const btn = document.getElementById("myBtn");
const copyBtn = document.getElementById("toCopy");

// Function to get a new random quote
function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Event listener to generate and display a new quote
btn.onclick = function () {
    let newQuote = getRandomQuote();
    result.innerText = newQuote;  // Update displayed text
};

// Function to copy the displayed quote
function toCopy() {
    let text = result.innerText; // Get the displayed quote
    if (text && text !== "Click the button to generate a quote") {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Quote copied to clipboard!"); // User feedback
            })
            .catch(err => console.error("Copy failed:", err));
    } else {
        alert("No quote to copy!");
    }
}
