 
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
        this.velocity=0;
    }
    create = function(){
        c.fillStyle='red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height) ;
    }

    update(){
        this.create();
        if(this.position.y+this.velocity < canva.height-50)
        {
        this.velocity+=gravity;
        this.position.y+=this.velocity;
        }
        else{
            this.velocity=0;
        }
    }
}

//player object
let player1 =new Player();
console.log(player1);
//call create player
//player1.create(); now we call update player which create player with it next moveable position


function animate()
{
    const req =requestAnimationFrame(animate);
    console.log("a");
    c.clearRect(0,0,canva.width,canva.height);
    player1.update();
}
animate();