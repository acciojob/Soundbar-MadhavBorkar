//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const sounds = ['sound1', 'sound2', 'sound3']; // List your sound files without extension
    const buttonsContainer = document.getElementById('buttons');

    let currentAudio = null;

    sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = sound;
        btn.addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(`sounds/${sound}.mp3`);
            currentAudio.play();
        });
        buttonsContainer.appendChild(btn);
    });

    const stopBtn = document.createElement('button');
    stopBtn.className = 'stop';
    stopBtn.textContent = 'Stop';
    stopBtn.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    });

    buttonsContainer.appendChild(stopBtn);
});