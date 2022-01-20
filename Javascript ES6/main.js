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
var 점프timer = 0;

function 프레임마다실행(){
    requestAnimationFrame(프레임마다실행);
    timer++;

    ctx.clearRect(0,0,canvas.width, canvas.height)

    // 144프레임마다 장애물 소환 후 array에 보관
    // 필요없어진 장애물은 제거
    if(timer % 120 === 0){
        var cactus = new Cactus();
        cactus_array.push(cactus);
    }

    cactus_array.forEach((a, i, o)=>{
        // x좌표가 0미만이면 제거

        if(a.x < 0){
            o.splice(i,1);
        }

        

        a.x--;
        a.draw();
    })
   
    if(점프중 == true)
    {
        dino.y --;
        점프timer ++;
    }
    if(점프중 == false){
        if(dino.y < 200){
            dino.y ++;
        }
        
    }
    if(점프timer > 100){
        점프중 = false;
        점프timer = 0;
    }
    
    
    dino.draw();
}

프레임마다실행();

var 점프중 = false;

document.addEventListener('keydown', function(e){
    if(e.code === 'Space')
    {
        점프중 = true;
    }
});