var zoro = document.getElementById('moveMe');
var swords = document.getElementById('swords');
var finalResult = document.getElementById('finalResult');
var main = document.querySelector('main');
var resetBtn = document.querySelector('button');

var moveX = 80;
var moveY = 80;

function checkCollision(){
    const zoroRect = zoro.getBoundingClientRect();
    const swordsRect = swords.getBoundingClientRect();

    if(zoroRect.left < swordsRect.right && zoroRect.right > swordsRect.left && zoroRect.top < swordsRect.bottom && zoroRect.bottom > swordsRect.top){
        zoro.style.opacity = 0;
        swords.style.opacity = 0;
        finalResult.style.display = 'block';       
    }
}

document.addEventListener('keydown', (e)=>{
    const mainRect = main.getBoundingClientRect();
    const zoroRect = zoro.getBoundingClientRect();
    
    let newMoveX = moveX;
    let newMoveY = moveY;

    if(e.code === 'ArrowLeft'){
        if(moveX - 40 >= 0) {
            newMoveX -= 40;
        }
    } else if(e.code === 'ArrowRight'){
        if(moveX + zoroRect.width + 40 <= mainRect.width) {
            newMoveX += 40;
        }
    } else if(e.code === 'ArrowUp'){
        if(moveY - 40 >= 0) {
            newMoveY -= 40;
        }
    } else if(e.code === 'ArrowDown'){
        if(moveY + zoroRect.height + 40 <= mainRect.height) {
            newMoveY += 40;
        }
    }

    moveX = newMoveX;
    moveY = newMoveY;

    zoro.style.left = moveX+'px';
    zoro.style.top = moveY+'px';

    checkCollision();
})

resetBtn.addEventListener('click', ()=>{
    location.reload();
})
