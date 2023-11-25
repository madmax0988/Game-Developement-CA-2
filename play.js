document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    const scoreE = document.querySelector('.scoreE');
    let score = 0;
    let molePresent = false;

    function run() {
        const i = Math.floor(Math.random() * holes.length);
        const hole = holes[i];
        let timer = null;

        const img = document.createElement('img');
        img.classList.add('mole');
        img.src = 'images/mole.png'; 

        hole.appendChild(img);
        molePresent = true;

        img.addEventListener('click', () => {
            score += 10;
            scoreE.textContent = score;
            molePresent = false;
            hole.removeChild(img);
            clearTimeout(timer); 

            setTimeout(() => {
                run();
            }, 500); 
        });

        timer = setTimeout(() => {
            if (molePresent) {
                hole.removeChild(img);
                molePresent = false;
                run();
            } else {
                gameOver();
            }
        }, 1500);
    }

    function gameOver() {
       
        alert('Game Over! Final Score: ' + score);
        window.location.href="./play.html"
    }

    holes.forEach((hole) => {
        hole.addEventListener('click', () => {
            if (!hole.querySelector('.mole') && molePresent) {
                gameOver(); 
            }
        });
    });

    run();
});
