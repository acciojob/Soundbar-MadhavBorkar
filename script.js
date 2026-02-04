//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundName = button.dataset.sound;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
