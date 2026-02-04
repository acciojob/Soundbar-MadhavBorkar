const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");
const audios = document.querySelectorAll("audio");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundId = btn.dataset.sound;

    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });

    const audio = document.getElementById(soundId);
    audio.play();
  });
});

stopBtn.addEventListener("click", () => {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
});
