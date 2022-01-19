var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

var timer = 0; 
var cactus_array = [];

function 프레임마다실행(){
    requestAnimationFrame(프레임마다실행);
    timer++;

    ctx.clearRect(0,0,canvas.width, canvas.height)

    if(timer % 144 === 0){
        var cactus = new Cactus();
        cactus_array.push(cactus);
    }
    cactus_array.forEach((a)=>{
        a.x--;
        a.draw();
    })
   
    dino.draw();
}

프레임마다실행();

