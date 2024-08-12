let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
   if (!started) {
       console.log("Game is started");
       started = true;
       levelUp();
   }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * btns.length); 
    let randmColor = btns[randidx];
    let randbtn = document.querySelector(`.${randmColor}`);

    gameSeq.push(randmColor); 
    btnFlash(randbtn);

    console.log(randbtn);
    console.log(randmColor);
    console.log(randidx);
}

function btnPress(event) {
    let clickedBtn = event.target.classList[1];
    userSeq.push(clickedBtn);

    console.log("Button was pressed:", clickedBtn);

    // Basic logic to check if the user sequence matches the game sequence
    if (userSeq[userSeq.length - 1] !== gameSeq[userSeq.length - 1]) {
        console.log("Wrong sequence!");
        h2.innerText = "Game Over, Press Any Key to Restart";
        resetGame();
    } else if (userSeq.length === gameSeq.length) {
        console.log("Correct sequence!");
        setTimeout(levelUp, 250); // Move to the next level
        userSeq = []; // Reset user sequence for next level
    }
}

function resetGame() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { // Added let for scoping
    btn.addEventListener("click", btnPress);
}
