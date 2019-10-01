let anglemMelon;
let moveBrow;

let watermelons=[];


function setup() {

  
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  for (let i=0; i <= 30; i++){
    watermelons[i] = new Watermelon(random(1,10) * width *.1, random(1,10) * width * .3 * i,random(360), random(8) * .03);
  }
  

}


function draw() {
  //console.log("mouse x is:" + mouseX);
  //console.log("mouse y is:" + mouseY);
  
  angleMelon = map(mouseX, mouseY, 400, 50, 1);
  moveBrow = map(mouseY, 0, 400, 0, -20);
  
  
  
  background(88, 158, 165);
  
  
  for (i = 0;i <watermelons.length; i++){
    watermelons[i].display();
    watermelons[i].move();
  }
  
  drawEar();
  drawHead();
  drawFace();
  drawSeedface();
  drawBrow(moveBrow);
  
}

function drawHead() {
  //draw head
  // set color head
  beginShape();
  fill(235, 160, 170,);
  noStroke();
  //draw top head
  curveVertex(width * .4, height * .2);
  curveVertex(width * .5, height * .19);
  curveVertex(width * .6, height * .2);
  curveVertex(width * .8, height * .3);
  // draw right head
  curveVertex(width * .9, height * .5);
  curveVertex(width * .8, height * .7);
  //draw bottom head
  curveVertex(width * .5, height * .8);
  curveVertex(width * .2, height * .7);
  //draw left head
  curveVertex(width * .1, height * .5);
  curveVertex(width * .2, height * .3);
  endShape(CLOSE);
}

function drawEar(xPos,yPos, rotation) {
  //draw ear
  //draw left ear
  beginShape();
  noStroke();
  fill(181, 224, 171, );
  circle(width * .2, width * .23, width * .25);
  //draw right ear
  circle(width * .8, width * .23, width * .25);
endShape(CLOSE);
  
  //draw ear marks
  beginShape()
  line(width * .45, height * .6, width * .55, height * .6);
  line(width * .5, height * .55, width * .5, height * .6);
  endShape(CLOSE);
  
  //set color rind
  stroke(141, 196, 141);
  strokeWeight(6);
  //draw rind marks ear left
  beginShape();
  line(height * .2, height * .3, height * .1, height * .27);
  line(height * .2, height * .26, height * .1, height * .27);
  line(height * .2, height * .26, height * .1, height * .22)
  line(height * .2, height * .25, height * .1, height * .2);
  line(height * .2, height * .25, height * .1, height * .16);
  //draw rind marks right
  line(height * .8, height * .24, height * .7, height * .2);
  line(height * .8, height * .24, height * .7, height * .17);
  line(height * .8, height * .29, height * .8, height * .2);
  line(height * .7, height * .23, height * .9, height * .17);
  line(height * .8, height * .14, height * .7, height * .2);
   endShape();  
 
}

function drawFace(){
  //draw face 
  //set color muzzle
  push();
  fill(255, 255, 255);
  //draw muzzle
  beginShape();
  circle(width * .5, width * .57, width * .2);
  endShape(CLOSE);

  //draw nose
  beginShape();
  fill(0);
  circle(width * .5, width * .52, width * .05);
  endShape(CLOSE);

  //draw eye
  beginShape();
  circle(width * .3, width * .5, width * .08);
  circle(width * .7, width * .5, width * .08);
  endShape(CLOSE);

  //draw mouth
  beginShape()
  stroke(8);
  strokeWeight(8);
  line(width * .45, height * .6, width * .55, height * .6);
  line(width * .5, height * .55, width * .5, height * .6);
  endShape(CLOSE);
  pop();
}

function drawSeedface(){
   //draw seedface
  //set color seed
  stroke(0, 0, 0);
  //draw seeds
  beginShape()
  ellipse(width * .25, height * .35, width * .004, height * .02);
  ellipse(width * .75, height * .65, width * .004, height * .02);
  ellipse(width * .32, height * .7, width * .004, height * .02);
  ellipse(width * .22, height * .6, width * .004, height * .02);
  ellipse(width * .6, height * .28, width * .004, height * .02);
  ellipse(width * .8, height * .4, width * .004, height * .02);
  endShape(CLOSE);
}
  
 function drawBrow(yPos){
  //draw brow
  //set color brow
  translate(0,yPos);
  stroke(0, 0, 0);
  //draw seeds
  beginShape()
  ellipse(width * .3, height * .42, width * .04, height * .003);
  ellipse(width * .7, height * .42, width * .04, height * .003);
  endShape(CLOSE);
 }
