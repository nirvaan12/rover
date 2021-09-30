canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

rover_width=100;
rover_height=90;
nasa_array=["image1.jpg","image2.jpg","image3.jpg","image4.jpg"];
randomnumber= Math.floor(Math.random()*4);
rover_x =10;
rover_y =10;

 background_img = nasa_array[randomnumber];
 rover_image ="rover.png";

function add(){
background_img_tag=new Image();
background_img_tag.onload= uploadbackground();
background_img_tag.src=background_img;

rover_image_tag= new Image();
rover_image_tag.onload= uploadrover();
rover_image_tag.src=rover_image;

}

function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress =='38'){
        up();
        console.log("up");
        
    }
    if(keypress =='40'){
        down();
        console.log("down");
    }
    if(keypress =='37'){
        left();
        console.log("left");
    }
    if(keypress =='39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=400){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}


