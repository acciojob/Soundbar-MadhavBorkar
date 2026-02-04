const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");
const audios = document.querySelectorAll("audio");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
      audio.dataset.playing = "false";
    });

    const audio = audios[index];
    audio.dataset.playing = "true";
  });
});

stopBtn.addEventListener("click", () => {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
    audio.dataset.playing = "false";
  });
});
