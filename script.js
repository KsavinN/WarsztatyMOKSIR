const canvas = document.querySelector('#space');
const ctx = canvas.getContext('2d');


// jeden ze sposobow renderowania bloczka
ctx.fillStyle = 'black';


const position = {
  x: 0,
  y: 0
}

ctx.fillRect(position.x, position.y, 20, 20);

const speedGame = 1;
let time = 0;

const animation = (tick) => {
  if (time++ % (5-speedGame) === 0) {
    position.x++;
    ctx.fillRect(position.x, position.y, 20, 20); 
  }
  requestAnimationFrame(animation); 
}

requestAnimationFrame(animation);
