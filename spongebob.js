var w = window.innerwidth
|| document.documentElement.clientWidth
|| document.body.clientwidth;

var h = window.innerheight
|| document.documentElement.clientHeight
|| document.body.clientheight;

var song;
var bg;
var spongebob;
var frameSpeed;
var xpos;
var ypos;
var drag = 0;

var REDY = 20;
var ORANGEY = 100;
var YELLOWY = 180;
var GREENY = 260;
var BLUEY = 340;
var PURPLEY = 420;
var BLACKY = 500;
var WHITEY = 580;

//heights for shape buttons on left panel
var SQUAREY = 140;
var CIRCLEY = 310;

//heights for increase/decrease buttons on left panel
var INCREASEY = 480;
var DECREASEY = 620;

//RGB initial values
var fillR = 255;
var fillG = 255;
var fillB = 255;

//pavaring with square or circle
var square = false;
var circle = true;

//initalized as not drawing
var STROKE = false;

//initilaized standard circle size with no increase or decrease
var brushWidth = 45;
var increase = false;
var decrease = false;

//song
//var song;

function setup() {
  var canv = createCanvas(w, h);
//  song = loadSound('Spongebob_theme.mp3');
  canv.parent("bgCanvas");

  bg = loadImage("data/Spongebob_soccer.png");
  noStroke();
}

function draw() {
  image(bg, w/5, h/7);
  //bg.resize(w, h);
  fill(0, 0);
  rect(0, 0, w, h);

  if (STROKE) {
    fill(fillR, fillG, fillB);

    //draw either a square or a circle
    if (square) {
      rect(mouseX-25, mouseY-25, brushWidth, brushWidth);
    } else if (circle) {
      ellipse(mouseX, mouseY, brushWidth, brushWidth);
    }

    //increase or decrease brushWidth
    if (increase) {
      increase = false;
      brushWidth += 20;
    } else if (decrease) {
      decrease = false;
      brushWidth -= 20;
    }
  }

  //left and right columns
  fill(255);
  rect(0, 0, 100, 1000);
  //rect(1000-100, 0, 100, 1000);

  //set stroke to 0 for drawing buttons
  stroke(0);

  //square and circle brush buttons
  fill(0);
  rect(5, 100, 90, 290);
  fill(255);
  stroke(300);
  fill(0);
  rect(25, SQUAREY, 50, 50);
  ellipse( 50, CIRCLEY, 45, 45);

  //increase stroke width button
  fill(0);
  rect(5, 420, 90, 280);
  fill(255);
  stroke(300);
  line(50, 460, 50, 500);
  line(30, 480, 70, 480);
  //decrease stroke width button
  line(30, 620, 70, 620);

  //right panel color buttons
  stroke(0);
  fill(0);
  for (var i = 0; i < 8; i++) {
    switch(i) {
    case 0:
      fill(255, 0, 0);
      break;  //red
    case 1:
      fill(255, 109, 0);
      break;  //orange
    case 2:
      fill(255, 255, 0);
      break;  //yellow
    case 3:
      fill(0, 255, 0);
      break;  //green
    case 4:
      fill(0, 0, 255);
      break;  //blue
    case 5:
      fill(255, 0, 255);
      break;  //purple
    case 6:
      fill(0);
      break;  //black
    case 7:
      fill(255);
      break;  //white
    }
    rect(w - 80, 20 + i * 80, 50, 50);
  }

  //eraser button
  fill(255, 153, 190);
  rect (w - 80, 660, 25, 20);
  fill(255);
  rect (w - 55, 660, 25, 20);
  textSize(10);
  text("ERASER", w-75, 674);

  //clear button
  noStroke();
  fill(0);
  rect(5, 28, 90, 47);
  fill(255);
  textSize(22);
  text("CLEAR", 12, 59);
}

function mouseClicked() {
  if (mouseX > w - 120 && mouseX < w  - 30) { //if color buttons are clicked
    if (mouseY > REDY && mouseY < REDY + 50) {
      fillR = 255;
      fillG = 0;
      fillB = 0;
    } else if (mouseY > ORANGEY&& mouseY < ORANGEY + 50) {
      fillR = 255;
      fillG = 109;
      fillB = 0;
    } else if (mouseY > YELLOWY&& mouseY < YELLOWY + 50) {
      fillR = 255;
      fillG = 255;
      fillB = 0;
    } else if (mouseY > GREENY&& mouseY < GREENY + 50) {
      fillR = 0;
      fillG = 255;
      fillB = 0;
    } else if (mouseY > BLUEY&& mouseY <BLUEY  + 50) {
      fillR = 0;
      fillG = 0;
      fillB = 255;
    } else if (mouseY > PURPLEY&& mouseY < PURPLEY + 50) {
      fillR = 255;
      fillG = 0;
      fillB = 255;
    } else if (mouseY > BLACKY && mouseY < BLACKY + 50) {
      fillR = 0;
      fillG = 0;
      fillB = 0;
    } else if (mouseY > WHITEY && mouseY < WHITEY + 50) {
      fillR = 255;
      fillG = 255;
      fillB = 255;
    } else if (mouseY > 660 && mouseY < 690) {
      fillR = 255;
      fillG = 255;
      fillB = 255;
      var Patrick = loadImage("data/Patrick_0.png");
      image(Patrick, mouseX, mouseY);

    }

  } else if (mouseX < 100) { //if brush buttons are clicked
    var x = (mouseX - 50)*(mouseX - 50);
    var BIGy = (mouseY-CIRCLEY)*(mouseY-CIRCLEY);
    var MIDy = (mouseY-INCREASEY)*(mouseY-INCREASEY);
    var LILy = (mouseY-DECREASEY)*(mouseY-DECREASEY);
    if (mouseY > 50 && mouseY < 100) { //clear button
      fill(255);
      rect(100, 0, w, h);
    } else if (mouseY > SQUAREY && mouseY < SQUAREY + 50) { //square button
      square = true;
      circle = false;
    } else if (sqrt(x + BIGy) < (75/2)) { //circle button
      square = false;
      circle = true;
    } else if (sqrt(x + MIDy) < (75/2)) { //increase button
      increase = true;
    } else if (sqrt(x + LILy) < (75/2)) { //decrease button
      decrease = true;
    }
  }
}

function mousePressed() {
  if (!(mouseX < 100 || mouseX > 1000 - 100))
    STROKE = true;


}

function mouseReleased() {
  STROKE = false;
}
