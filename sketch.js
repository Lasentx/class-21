var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  object1 = createSprite(400, 400, 50, 50);
  object2 = createSprite(600, 400, 50, 50);
  object1.velocityX = 5;
  object2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object1, movingRect)){
    movingRect.shapeColor = "yellow";
    object1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    object1.shapeColor = "blue";
  }

  
  //BOUNCING ALGORITHM
  
bounceOff(object1,object2);

  drawSprites();
}


function isTouching(book, computer){
   //DETECTING COLLISION
   if (book.x - computer.x < computer.width/2 + book.width/2
    && computer.x - book.x < computer.width/2 + book.width/2
    && book.y - computer.y < computer.height/2 + book.height/2
    && computer.y - book.y < computer.height/2 + book.height/2) {
      //Yes, they are touching
      return true;
  }
  else {
      //No, they aren't touching
      return false;
  }
}

function bounceOff(book, computer){
  if (book.x - computer.x < computer.width/2 + book.width/2
    && computer.x - book.x < computer.width/2 + book.width/2){
      book.velocityX = book.velocityX*(-1);
      
     computer.velocityX = computer.velocityX*(-1);
    }
    if (book.y - computer.y < computer.height/2 + book.height/2
      && computer.y - book.y < computer.height/2 + book.height/2){
        book.velocityY = book.velocityY*(-1);
        
       computer.velocityY = computer.velocityY*(-1);
    }
}



/*
return -- keyword which gives back a value to the calling function(draw)

Arguments
  - Given to the functions when they are being called
  - Real values which exist --> uses memory from the storage location
Parameters
  - Not real
  - Do not exist --> Takes no memory from the storage location
  - PLACEHOLDERS for arguments
*/