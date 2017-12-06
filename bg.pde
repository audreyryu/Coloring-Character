import processing.sound.*;

SoundFile song;
PImage bg;
Animation spongebob, patrick;
int frameSpeed;
float xpos;
float ypos;
float drag = 0;
Animation[] animations = new Animation[2];
int currentAnimation = 0;

void setup() {
  size(1000, 625);
  bg = loadImage("spongebob-bg.jpg");
  song = new SoundFile(this, "Spongebob-theme.mp3");
  song.play();
  animations[0] = new Animation("Spongebob_", 9);
  animations[1] = new Animation("Patrick_", 11);
}

void draw() { 
  background(bg);
  //frameRate(10);
  //if (frameCount % 5 == 0){
    animations[currentAnimation].display(mouseX, mouseY);
  //}
  if (mousePressed){
    currentAnimation += 1;
    if (currentAnimation == animations.length){
      currentAnimation = 0; 
    }
  }
}

class Animation {
  PImage[] images;
  int imageCount;
  int frame;
  int show = 5;
  int counter = 0;
  
  Animation(String imagePrefix, int count) {
    imageCount = count;
    images = new PImage[imageCount];
    
    for (int i = 0; i < imageCount; i++) {
      String filename = imagePrefix + i + ".png";
      images[i] = loadImage(filename);
    }
  }

  void display(float xpos, float ypos) {
    if (frameCount % 5 == 0){
      frame = (frame+1) % imageCount;
    } 
    image(images[frame], xpos, ypos);
  }
  
  int getWidth() {
    return images[0].width;
  }
}