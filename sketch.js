var ball;
var database,position;
var position2;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    
    ball1= createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    
    ball2= createSprite(290,290,10,10);
    ball2.shapeColor = "blue";

    var ball1position = database.ref('ball/position');
    ball1position.on("value",readPosition1,showError);
    
    var ball2position = database.ref('ball2/position');
    ball2position.on("value",readPosition2,showError);
    
}

function draw(){
    background("white");
    if (position !== undefined) {
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }


    if(keyDown("A")){
        changePosition2(-10,0);
    }
    else if(keyDown("D")){
        changePosition2(10,0);
    }
    else if(keyDown("W")){
        changePosition2(0,-10);
    }
    else if(keyDown("S")){
        changePosition2(0,+10);
    }
    drawSprites();
    }
  
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    });
} 

function changePosition2(x,y){
    database.ref('ball2/position').set({
        'x' : position2.x + x,
        'y' : position2.y + y
    });
} 

function readPosition1(data){
    position = data.val();

    ball1.x = position.x;
    ball1.y = position.y;

} 
function readPosition2(data){
    position2 = data.val();
    ball2.x = position2.x;
    ball2.y = position2.y;
} 
function showError(){
    console.log("Error");
    
}