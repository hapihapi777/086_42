let egg = document.getElementById('egg');
let bird = document.getElementById('bird');
let rare = document.getElementById('rare');

egg.addEventListener('click', Hyouzi);

// hiyoko N
// niwatori R
// taka SR
// dragon SSR

function Hyouzi() {
  
  let random = Math.floor( Math.random() * 4 );
  console.log(random);
  
  egg.className = "nodisp";

  bird.src = GetBird(random);
  bird.className = "disp";

  rare.src = GetRare(random);
  rare.className = "disp";


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