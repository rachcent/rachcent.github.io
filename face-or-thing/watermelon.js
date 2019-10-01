class Watermelon {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

  display() {
    //watermelon
    noStroke();
    push();
    translate(this.xPos, this.yPos);
    scale(this.size);
    rotate(this.rotation);

    push();
    translate(width * -.5, height * -.3);


    beginShape();
    //color melon
    fill(181, 224, 171);
    //draw melon green part
    curveVertex(width * .2, height * .1);
    curveVertex(width * .1, height * .5);
    curveVertex(width * .8, height * .6);
    curveVertex(width * .6, height * .02);
    curveVertex(width * .01, height * .6);
    endShape();


    beginShape();
    noStroke();
    //draw melon red part
    fill(235, 160, 170, );
    curveVertex(width * .4, height * .3);
    curveVertex(width * .03, height * .5);
    curveVertex(width * .76, height * .62);
    curveVertex(width * .58, height * .03);
    curveVertex(width * .1, height * .1);
    endShape();

    //draw melon seeds
    fill(0, 0, 0);
    ellipse(width * .5, height * .3, width * .05, height * .03);
    ellipse(width * .6, height * .5, width * .05, height * .03);
    ellipse(width * .3, height * .5, width * .05, height * .03);
    pop();
    pop();
  }


  move(){
    
  //this.angle++ is shorthand for this angle = this.angle + 1;  
  this.rotation++;  
    
  if (this.yPos <=height * 1.3){
  //this.yPos = this.yPos +2
  //shorthand below is +=
  this.yPos +=2;
  } else {
    this.yPos = -height * .3
}
  }
}


// function drawWatermelon(xPos,yPos, rotation) {
//   //watermelon
//   noStroke();
//   push();
//   translate(xPos, yPos);
//   scale(.4);
//   rotate(rotation);

//   push();
//   translate(width * -.5, height * -.3);


//   beginShape();
//   //color melon
//   fill(181, 224, 171);
//   //draw melon green part
//   curveVertex(width * .2, height * .1);
//   curveVertex(width * .1, height * .5);
//   curveVertex(width * .8, height * .6);
//   curveVertex(width * .6, height * .02);
//   curveVertex(width * .01, height * .6);
//   endShape();


//   beginShape();
//   noStroke();
//   //draw melon red part
//   fill(235, 160, 170, );
//   curveVertex(width * .4, height * .3);
//   curveVertex(width * .03, height * .5);
//   curveVertex(width * .76, height * .62);
//   curveVertex(width * .58, height * .03);
//   curveVertex(width * .1, height * .1);
//   endShape();

//   //draw melon seeds
//   fill(0, 0, 0);
//   ellipse(width * .5, height * .3, width * .05, height * .03);
//   ellipse(width * .6, height * .5, width * .05, height * .03);
//   ellipse(width * .3, height * .5, width * .05, height * .03);
//   pop();
//   pop();
// }