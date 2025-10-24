/*

    50%
increase in global water demand expected by 2030
40%
of Europe's water is used by industry and agriculture
600%
increase in global water demand in the last 100 years

*/

let img;
let i = 0;
let dropX = 15;
let button;
const IMAGE_STARTSIZE = 100;

// Load the image.
function preload() {
  imgGlobe = loadImage("assets/globe-public.png");
  imgWaterDrop = loadImage("assets/water-drop.png");
}

function setup() {
  createCanvas(380, 600);
  frameRate(10);
  imageMode(CENTER);

  button = createButton("How Much Will It Rise by 2030");
  button.size(200, 160);
  button.style("font-size", "24px");
  button.style("padding", "20px");

  button.center();
  // Call repaint() when the button is pressed.
  button.mousePressed(repaint);
}

function draw() {
  if (i == 0) {
    borderAndHeading();
    image(imgGlobe, 190, 150, IMAGE_STARTSIZE, IMAGE_STARTSIZE);
  } else if (i < 50) {
    i++;
    borderAndHeading();

    image(imgGlobe, 190, 150, IMAGE_STARTSIZE + i, IMAGE_STARTSIZE + i);
    textSize(20);

    text("Increase in Water Demand by 2030", 30, 275);
    text(i + " %", 180, 320);
    dropX = 30;
    dropY = 300;
    for (j = 0; j < i; j++) {
      if (j % 10 == 0) {
        dropY += 50;
        dropX = 30;
      }
      image(imgWaterDrop, dropX, dropY, 35, 35);
      dropX += 35;
    }
  }
}

function repaint() {
  i++;
  button.remove();
  draw();
}

function borderAndHeading() {
  background(225, 244, 252);
  stroke(13, 152, 186);
  strokeWeight(8);
  line(15, 15, 15, 585);
  line(15, 15, 365, 15);
  line(15, 585, 365, 585);
  line(365, 15, 365, 585);
  textSize(28);
  strokeWeight(0);
  text("Global Water Demand", 60, 50);
}
