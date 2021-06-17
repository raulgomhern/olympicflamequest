let runner
let counter
let rImg;
let oImg;
let bImg;
let obstacles = [];

class Runner {
  constructor() {
    this.r = 85;
    this.x = 40;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 3.5;
  }

  jump() {
    if (this.y == height - this.r){
      this.vy = -28;
    }    
   }

   hits(obstacles) {
    return collideRectRect(this.x, this.y, this.r, this.r, obstacles.x, obstacles.y, obstacles.r, obstacles.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(rImg,this.x, this.y, this.r, this.r);
  }
}


class Obstacle {
  constructor() {
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(oImg, this.x, this.y, this.r, this.r);
  }
}

function preload() {
  rImg = loadImage('../img/runner.png');
  oImg = loadImage('../img/obstacle.png');
  bImg = loadImage('../img/backgroundtrex.jpg');

}
function setup() {
  createCanvas(500, 230);
  runner = new Runner();
}


function keyPressed() {
  if (key == ' ') {
    runner.jump();
    }
  }
function draw() {
 

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  background(bImg);
  for (let o of obstacles) {
    o.move();
    o.show();
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var closebtn = document.getElementById("close");
    if (runner.hits(o)) {
      console.log('game over');
      noLoop();
      modal.style.display = "block";
      btn.onclick = function() {
        location.reload();
      }
      closebtn.onclick = function() {
        modal.style.display = "none";
      }
    }

}
runner.show();
runner.move();
}
