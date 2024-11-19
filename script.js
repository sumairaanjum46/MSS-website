// Array of texts to be displayed one by one
const texts = [
    "Join MSS Club to be a part of a vibrant community of like-minded individuals.",
    "As a member, you'll have access to exclusive resources, events, workshops, and networking opportunities.",
    "Ready to make a difference and unlock new opportunities? Join us today!"
];

// Select the element where the text will appear
const typingElement = document.getElementById("typing-text");

// Function to type text with a typing effect
function typeText(element, text, speed, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval); // Stop typing when the text is finished
            setTimeout(callback, 500); // Wait for a brief moment before continuing
        }
    }, speed);
}

// Function to start typing each line in the texts array
function startTypingEffect() {
    let index = 0;
    
    function nextText() {
        if (index < texts.length) {
            typingElement.innerHTML = ''; // Clear the previous text
            typeText(typingElement, texts[index], 100, nextText); // Type the current text
            index++;
        }
    }
    
    nextText(); // Start typing the first text
}

// Start the typing effect when the page loads
startTypingEffect();
