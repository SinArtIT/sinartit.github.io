let headerAudio = document.querySelector('.header-audio');//audioplayer
let headerCurTime = document.querySelector('.header-main-content .current-time');
let headerAllTime = document.querySelector('.header-main-content .track-time');
let headerPlayerBar = document.querySelector('.header-main-content .player__range-bar');
let headerPlayerColorBar = document.querySelector('.header-main-content .player__range-bar-color');
let headerPlayerBarLine = document.querySelector('.header-main-content .player__range-bar-vertical');

let mainAudio = document.querySelector('.main-audio');//audioplayer
let mainCurTime = document.querySelector('.main .current-time');
let mainAllTime = document.querySelector('.main .track-time');
let mainPlayerBar = document.querySelector('.main .player__range-bar');
let mainPlayerColorBar = document.querySelector('.main .player__range-bar-color');
let mainPlayerBarLine = document.querySelector('.main .player__range-bar-vertical');

let btns = document.querySelectorAll('.player__play-button');
let tracks = [`Poets of the Fall--Lift (album version)`, `Poets of the Fall--Overboard`, `Poets of the Fall--Late goodbye (Max Payne 2 end credits)`, `Poets of the Fall--Don't Mess With Me`, `Poets of the Fall--3 AM`, `Poets of the Fall--Stay`];
let trackList = document.querySelectorAll('.tracklist li');

let isPlay = false;

trackList.forEach((element, item) => {
  element.onclick = function () {
    mainAudio.src = `./audio/${tracks[item]}.mp3`;
    mainCurTime.innerText = normolizeTime(`00:00`);
    drawLineBar(mainAudio, mainPlayerColorBar, mainPlayerBarLine, mainPlayerBar);
    document.querySelector('.main .player__play-button').classList.remove('pause');
    isPlay = false;

    trackList.forEach(elem => {
      elem.classList.remove('check');
    })

    this.classList.add('check');
  };
});

btns.forEach(function (element) {
  element.onclick = function () {
    if (this.dataset.parent == 'header') {
      player(this, headerAudio, headerCurTime, headerAllTime, headerPlayerBar, headerPlayerColorBar, headerPlayerBarLine);
    } else {
      player(this, mainAudio, mainCurTime, mainAllTime, mainPlayerBar, mainPlayerColorBar, mainPlayerBarLine);
    }
  }
})

function player(btn, audioPlayer, curTime, allTime, playerBar, playerColorBar, playerBarLine) {
  let m = 0;
  let s = 0;

  playMusic();

  btn.onclick = function () {
    if (!isPlay) {
      playMusic();
      this.classList.toggle('pause');
    } else {
      audioPlayer.pause();
      isPlay = false;
      this.classList.toggle('pause');
    }
  }

  function playMusic() {
    let out = '';
    let allTimeOut = `${Math.floor(audioPlayer.duration / 60)}:${Math.floor(audioPlayer.duration % 60)}`;

    audioPlayer.play();
    isPlay = true;

    setInterval(() => {
      s = Math.floor(audioPlayer.currentTime % 60);
      m = Math.floor(audioPlayer.currentTime / 60);

      if (s < 9) {
        out = `${m}:0${s}`
      }
      if (s > 9 && s < 60) {
        out = `${m}:${s}`
      }
      if (s >= 60) {
        s = 0;
        out = `${m}:${s}`
      }

      curTime.innerText = normolizeTime(out);
      drawLineBar(audioPlayer, playerColorBar, playerBarLine, playerBar);
    }, 100);


    allTime.innerText = normolizeTime(allTimeOut);
  }
}

function drawLineBar(audioPlayer, playerColorBar, playerBarLine, playerBar) {
  let lineBarWidth = +(Math.floor(audioPlayer.currentTime) / Math.floor(audioPlayer.duration)) * +playerBar.offsetWidth;

  playerColorBar.style.width = lineBarWidth + 'px';
  playerBarLine.style.left = lineBarWidth + 'px';
}

function normolizeTime(out) {
  let arr = out.split(':');
  if (arr[0].length < 2) {
    arr[0] = '0' + arr[0];
  }
  return out = arr.join(':');
}