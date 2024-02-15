 
const canva=document.querySelector('canvas');

const c=canva.getContext('2d');

//defining the dimension of canvas
canva.width = innerWidth;
canva.height = innerHeight;
//creating player class
class Player {
    constructor(){
        this.position ={
            x:100,
            y:100
        }
        this.height =50
        this.width =50
    }
    create(){
        c.fillStyle='red';
        c.fillRect(this.position.x,this.position.y,this.width,this.height) ;
    }
}

//player object
let player1 =new Player();
console.log(player1);
//call create player
player1.create();
