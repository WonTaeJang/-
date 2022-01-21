var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = '../Image/cactus.png';

var img2 = new Image();
img2.src = '../Image/dinosaur.png';

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img2, this.x, this.y);
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
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img1, this.x, this.y);
    }
}

var timer = 0; 
var cactus_array = [];
var 점프timer = 0;
var animation;

function 프레임마다실행(){
    animation = requestAnimationFrame(프레임마다실행);
    timer++;

    ctx.clearRect(0,0,canvas.width, canvas.height)

    // 144프레임마다 장애물 소환 후 array에 보관
    // 필요없어진 장애물은 제거
    if(timer % 200 === 0){
        var cactus = new Cactus();
        cactus_array.push(cactus);
    }

    cactus_array.forEach((a, i, o)=>{
        // x좌표가 0미만이면 제거

        if(a.x < 0){
            o.splice(i,1);
        }

        충돌확인(dino, a);

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

// 충돌 확인 
function 충돌확인(dino, cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);

    if(x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}


var 점프중 = false;

document.addEventListener('keydown', function(e){
    if(e.code === 'Space')
    {
        점프중 = true;
    }
});