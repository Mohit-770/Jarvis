let isJarvisActive = true;

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Function to speak with dynamic response
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

// Function to greet based on time of the day
function wishMe() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good morning Mohit boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Mohit sir...");
    } else {
        speak("Good Evening Sr...");
    }
}

// Event listener for page load
window.addEventListener('load', () => {
    speak(" you can give any task JARVIS is working.");
    wishMe();
});

// Speech recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Event listener for recognition result
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

// Event listener for button click to start recognition
btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})

// Function to handle user commands
function takeCommand(messages) {
    const message = messages.toLowerCase();
    if (message.includes('hey') || message.includes('hello')) {
        const responses = [
            "Hello Mohit, how can I assist you today? Apart from this, you are looking good.",
            "Hey there! What can I do for you?",
            "Hi Mohit! How may I help you?"
        ];
        speak(responses[Math.floor(Math.random() * responses.length)]);
    } else if (message.includes("open")) {
        openWebsite(message);
    }
}

// Function to open websites based on command
function openWebsite(message) {
    if (message.includes("google")) {
        openUrl("https://google.com");
    } else if (message.includes("youtube")) {
        openUrl("https://youtube.com");
    } else if (message.includes("facebook")) {
        openUrl("https://facebook.com");
    } else if (message.includes("gmail")) {
        openUrl("https://gmail.com");
    } else if (message.includes("salesforce")) {
        openUrl("https://salesforce.com");
    } else if (message.includes("meet")) {
        openUrl("https://meet.google.com/");
    } else {
        speak("I'm not sure which website to open.");
    }
}
function takeCommand(messages) {
    const message = messages.toLowerCase();
    if (message.includes('hey') || message.includes('hello')) {
        const responses = [
            "Hello Mohit, how can I assist you today?",
            "Hey there! What can I do for you?",
            "Hi Mohit! How may I help you?"
        ];
        speak(responses[Math.floor(Math.random() * responses.length)]);
    } else if (message.includes("open")) {
        openWebsite(message);
    } else {
        // If JARVIS can't understand the command, direct to Google search
        const searchQuery = encodeURIComponent(message);
        const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
        openUrl(googleSearchUrl);
    }
}
// Function to handle user commands
function takeCommand(messages) {
    const message = messages.toLowerCase();
    if (message.includes('hey') || message.includes('hello')) {
        const responses = [
            "Hello Mohit, how can I assist you today?",
            "Hey there! What can I do for you?",
            "Hi Mohit! How may I help you?"
        ];
        speak(responses[Math.floor(Math.random() * responses.length)]);
    } else if (message.includes("open")) {
        openWebsite(message);
    } 
    else if (message.includes("introduce yourself")) {
        speak("I am JARVIS, your virtual assistant. I am here to help you with various tasks.");
    } else if (message.includes("thanks")) {
        speak("You're welcome! Please let me know if there's anything else I can help with.");
    } else if (message.includes("are you single")) {
        speak("No, I am in a committed relationship with my Wi-Fi. Just kidding!");
    } else if (message.includes("pareshan")) {
        speak("Kya hua apko? Aap apna mind fresh karne ke liye 2 minute ka break le sakte hai.");
    } else if (message.includes("gussa")) {
        speak("Lagta hain mujhe aapse duri banakar rakhni hogi.");
    } else if (message.includes("cute")) {
        speak("Sir, you must remember that you are married and have a son.");
    } else if (message.includes("gana")) {
        speak("Kabhi Kabhi Mere Dil Mein Khayal Aata Hai, Ki Jaise Tujhko Banaya Gaya Hai Mere Liye, Tu Abse Pehle Sitaaron Mein Bas Rahi Thi Kahi.");
    } else if (message.includes("awaaz")) {
        speak("I understand, sir.");
    } else if (message.includes("tarif")) {
        const compliments = [
            "You're doing great!",
            "You're looking sharp today!",
            "You're incredibly smart and capable!",
            "You're an inspiration!"
        ];
        speak(compliments[Math.floor(Math.random() * compliments.length)]);
    } 
    else {
        // If JARVIS can't understand the command, direct to Google search
        const searchQuery = encodeURIComponent(message);
        const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
        // Open the Google search URL
        openUrl(googleSearchUrl);
    }
}

// Function to open URL in a new tab
function openUrl(url) {
    const win = window.open(url, "_blank");
    if (win) {
        speak("Performing a Google search for " + url + ". Please wait.");
        // Once the Google search page is loaded, speak the search results
        win.addEventListener('load', () => {
            const searchResults = win.document.querySelector("#search").innerText;
            speak("Here are the search results. " + searchResults);
        });
    } else {
        speak("Failed to open " + url + ".");
    }
}
function shutUp() {
    isJarvisActive = false;
    speak("Okay, I'll be quiet now.");
}

// Function to turn on JARVIS
function activateJarvis() {
    isJarvisActive = true;
    speak("I'm back! How can I assist you?");
}


// Function to open URL in a new tab
function openUrl(url) {
    const win = window.open(url, "_blank");
    if (win) {
        speak("Opening boss Please wait it may take some time.");
    } else {
        speak("Failed to open " + url + ".");
    }
}
