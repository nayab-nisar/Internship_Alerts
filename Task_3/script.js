let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";

const changeTurn = () => turn === "X" ? "0" : "X";



const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; i++) {
        let winCondition = wins[i];
        let a = boxtexts[winCondition[0]].innerText;
        let b = boxtexts[winCondition[1]].innerText;
        let c = boxtexts[winCondition[2]].innerText;

        if (a === '' || b === '' || c === '') continue;

        if (a === b && b === c) {
            gameOver.play();
            document.getElementsByClassName('info')[0].innerText = 'Player ' + a + ' wins!';
            disableClick();
            return;
        }
    }

    let count = 0;
    Array.from(boxtexts).forEach((element) => count += element.innerText !== '' ? 1 : 0);

    if (count === 9) {
        gameOver.play();
        document.getElementsByClassName('info')[0].innerText = 'It\'s a tie!';
    }
};

const disableClick = () => {
    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach((element) => {
        element.style.pointerEvents = 'none';
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            checkWin();
        }
    });
});


const resetGame = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach((element) => element.innerText = '');

    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach((element) => element.style.pointerEvents = 'auto');

    turn = 'X';
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
};

document.getElementById('reset').addEventListener('click', resetGame);
