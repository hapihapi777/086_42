let btn = document.getElementById('btn');
btn.addEventListener('click', saiyomikomi);

let cb = document.getElementById('cb'); // チェックボックス 

let egg = document.getElementById('egg');
let smoke = document.getElementById('smoke');

let bird = document.getElementById('bird');
let rare = document.getElementById('rare');

egg.addEventListener('click', Hyouzi);

// hiyoko N
// niwatori R
// taka SR
// dragon SSR

function Hyouzi() {

  let random = Math.floor(Math.random() * 4);
  console.log(random);

  if (cb.checked) random = 3;

  if (random === 3) {
    egg.className = "nodisp";
    smoke.className = "disp";
    startTimer();

  } else {
    egg.className = "nodisp";

    bird.src = GetBird(random);
    bird.className = "disp";

    rare.src = GetRare(random);
    rare.className = "disp";
  }


  // document.getElementById('egg').src="img/" + images[random] + ".png";
  // document.getElementById('bird').src="img/hiyoko.png";
  // document.getElementById('rare').src="img/n.png";
  // if (random > 3) random = 4;
}

function GetBird(r) {
  let images = [
    "img/hiyoko.png",
    "img/niwatori.png",
    "img/taka.png",
    "img/dragon.png",
    // "img/egg.png",
  ];

  return images[r];
}

function GetRare(r) {
  let rares = [
    "img/n.png",
    "img/r.png",
    "img/sr.png",
    "img/ssr.png",
  ];

  return rares[r];
}


// タイマー関数
function startTimer() {
  let ssr = 3;

  timerId = setTimeout(function () {
    // ～何かの処理～
    //  egg.src = "img/smoke.png";
    //  egg.className = "nodisp";
    smoke.className = "nodisp";

    bird.src = GetBird(ssr);
    bird.className = "disp";

    rare.src = GetRare(ssr);
    rare.className = "disp";
  }, 1500);
}

function saiyomikomi() {
  window.location.reload();
}