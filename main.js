 
const canva=document.querySelector('canvas');

const c=canva.getContext('2d');

//defining the dimension of canvas
canva.width = innerWidth;
canva.height = innerHeight;

//gravity
let gravity=1;

//creating player class
class Player {
    constructor(){
        this.position ={
            x:100,
            y:100
        }
        this.height =50
        this.width =50
        this.velocity={
            x:0,
            y:0
        };
    }
    create = function(){
        c.fillStyle='red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height) ;
    }

    update(){
        this.create();
        if(this.position.y+this.velocity.y < canva.height-50)
        {
        this.velocity.y+=gravity;
        this.position.y+=this.velocity.y;
        }
        else{
            this.velocity.y=0;
        }
        this.position.x+=this.velocity.x;
    }
}

//player object
let player1 =new Player();
const keys={
    right:false,
    left:false,
    up:false
}
//console.log(player1);
//call create player
//player1.create(); now we call update player which create player with it next moveable position


function animate()
{
    const req =requestAnimationFrame(animate);
    //console.log("a");
    c.clearRect(0,0,canva.width,canva.height);
    player1.update();


    //player movement as per key(left,right,up)
    if(keys.up)
    player1.velocity.y=-10;
    if(keys.right)
    player1.velocity.x=2;
    else if(keys.left)
    player1.velocity.x=-2;
    else
    player1.velocity.x=0;

}
animate();




addEventListener('keydown' , (e) => { 
    //console.log(e.keyCode);
    let x=e.keyCode;

    switch (x){
        case 65:
            console.log("left");
            keys.left=true;
            break;
        case 37:
            console.log("left");
            keys.left=true;
            break;
        case 38:
            console.log("up");
            keys.up=true;
            break;
        case 87:
            console.log("up");
            keys.up=true;
            break;
        case 39:
            console.log("right");
            keys.right=true;
            break;
        case 68:
            console.log("right");
            keys.right=true;
            break;
        case 83:
            console.log("down"); 
            break;
        case 40:
            console.log("down"); 
            break;
        
        default:
            console.log("invalid");
        
        }

})

addEventListener('keyup' , (e) => { 
    //console.log(e.keyCode);
    let x=e.keyCode;

    switch (x){
        case 65: 
            keys.left=false;
            break;
        case 37: 
            keys.left=false;
            break;
        case 38: 
            keys.up=false;
            break;
        case 87: 
            keys.up=false;
            break;
        case 39: 
            keys.right=false;
            break;
        case 68:
            console.log("right");
            keys.right=false;
            break;
        case 83:
            console.log("down");
            break;
        case 40: 
            keys.down=false;
            break;
        
        default:
            console.log("invalid");
        
        }

})