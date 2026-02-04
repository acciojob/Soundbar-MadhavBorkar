//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");
const audios = document.querySelectorAll("audio");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });

    const audio = audios[index];
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  });
});

stopBtn.addEventListener("click", () => {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
});
