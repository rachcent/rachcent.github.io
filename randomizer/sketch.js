let randomIndex;
let animating = false;
let counter = 0;
let snow =[];
let r, g, b;
let textcolor;

 function setup() {
   createCanvas(800, 800);
   background(200);

   textSize(32);




   //snow.push(new snowflake());
   // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);



   text("click to randomize",250,300);
   setTimeout(changeBackground,1000);
 }

 function draw() {
   if( animating == true) {
     stroke(r, g, b)
     fill(r, g, b, 127);
     ellipse(random(width),random(height), random(50,200));
   }
  }

//for (flake of snow){
  //flake.render();
//}

 function changeBackground(){
   if (counter <=5){
     counter++;
     console.log(counter)
   background(random (255),random (255), random (255));
   setTimeout(changeBackground,1000);
 } else {}
 }
 function randomizer(){
   animating = false
   if (students[0]){
      //this displays random name and splices it out of array
      background(247, 235, 173);
      randomIndex = int(random(students.length));
      text(`${students[randomIndex].firstName}'s favorite movie is...

      ${students[randomIndex].movie}`, 250, 300);
      randomIndex = int(random(students.length));
      // text(students[randomIndex].firstName + "'s favorite movie is" + students[randomIndex].color, 250, 300);
      students.splice(randomIndex,1);
   }  else{
     background(247, 235, 173);
     text("nothing left!",textcolor, 250,300);
   }
 }

 function mousePressed(){
   animating = true;
   setTimeout(randomizer, 2000);



}
