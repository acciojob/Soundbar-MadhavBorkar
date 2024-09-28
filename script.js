// Get all buttons with the class 'btn'
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

// Array to store the current playing audio elements
let audioElements = [];

// Add event listener to each button to play the corresponding sound
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.getAttribute('data-sound');
        playSound(soundName);
    });
});

// Function to play a sound
function playSound(soundName) {
    const audio = new Audio(`./sounds/${soundName}.mp3`);
    
    // Stop all currently playing sounds
    stopAllSounds();

    // Add the new audio to the array and play it
    audioElements.push(audio);
    audio.play();
}

// Function to stop all currently playing sounds
function stopAllSounds() {
    audioElements.forEach(audio => audio.pause());
    audioElements = []; // Clear the array
}

// Add event listener to the stop button
stopButton.addEventListener('click', stopAllSounds);
