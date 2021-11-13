score = 0;
cross = true;
audio = new Audio('music.mp3/m.mp3');
audiogo = new Audio('music.mp3/gameover.wav');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
        console.log("key code is:", e.keyCode)
        if (e.keyCode == 38) {
            dino = document.querySelector('.dino');
            dino.classList.add('animateDino');
            setTimeout(() => {
                dino.classList.remove('animateDino')
            }, 700);
        }
        if (e.keyCode == 39) {
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = dinoX + 112 + "px";
        }
        if (e.keyCode == 37) {
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = (dinoX - 112) + "px";
        }

    }
    /*--------collison with vilens when the collide then game over appear-------------*/
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left')); /*dino x property */
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top')); /*dino y property */

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //  console.log(offsetX, offsetY)
    /*--------game over when you touch zombie------------------------------*/
    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 500)
        setTimeout(() => {
            audiogo.pause();
        }, 2000)

    }
    /*-------------- code for when you not touch zombie---------------------*/
    else if (offsetX < 145 && cross) {
        score = score + 1;
        updatScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        // animation Duration =aniDur
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.3;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
    }
}, 10);

/*-----------methode for updating score-------------------*/
function updatScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}