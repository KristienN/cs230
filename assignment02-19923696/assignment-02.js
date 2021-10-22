/*
*       Source of help iwth JavaScript is from Author: Beau Carnes https://www.youtube.com/watch?v=n_ec3eowFLQ     
*/


// Arrays to store the flashes and the player response
let sequence = [];
let mimic = [];

// other variables 
let playerTurn;
let aiTurn;
let interval;

// Variable integers
let highCount = 0;       // to store the highest score
let score = 0;           // to store the score
let numOfFlashes = 0;    // number of flashes that will be reset each round
let turnNo = 1;          // the number of flashes that need to appear
let time = 5;            // 5 seconds to input

// Boolean variables
let play = false;        // to stop game
let win = false;         // to see if player wins
let noNoise = false;     // to check if noise should be made
let timer = false;       // boolean for the timer to start


// storing all the clickable elemts in the main circle console
const scoreCount = document.querySelector("#current");
const startBtn = document.querySelector("#start");
const indicator = document.querySelector(".indicator");
const highScore = document.querySelector("#prevHS");

// initialising the high score
highScore.innerHTML = (score).toLocaleString('en', {minimumIntegerDigits: 2, useGrouping: false});


// When start button is clicked
startBtn.addEventListener('click' , (event) => {

    if(play == false){
        score = 0;              // initialising the score
        numOfFlashes =0;        // initialising the flash number
        sequence = [];          // initialising the sequence of flashes
        play = true;            // making sure start button cannot be clicked whilst playing
        noNoise = false;        // allowing the noises

        // chaing the elements in the inner circle
        scoreCount.innerHTML = "--";
        indicator.style.backgroundColor = "rgb(0,204,0)"; // red to green

        clearFlash();                       // making sure the flash class is not on any element
        clearInterval(interval);            // to make sure colors are not flashing
        setTimeout(playGame,2500);          // to start the game after 3 seconds
    }

});

// function for the gameplay when the start button is clicked
function playGame(){
    //time = 5;

    // initialising more values
    mimic = [];
    trunAI = true;
    turnNo = 1;

    // changing score on the html to the score
    scoreCount.innerHTML = (score).toLocaleString('en', {minimumIntegerDigits: 2, useGrouping: false}); // making sure that the digits have 2 values

    // initialising the  sequence array with 25 flashes
    for(var i =0; i < 25; i++){
        let random = Math.floor(Math.random()*4)+1;
        sequence.push(random);

    }

    // computer turn
    aiTurn = true;
    interval = setInterval(compRound, 1000);           // making sure computer flash happens every second
}

// computer turn
function compRound(){                                 
    let x = 800;                                       // to be able to decrease the amount of time each flash takes
    playerTurn = false;                                // making sure player connot click buttons 

    // to check if the turn is over
    if(numOfFlashes == turnNo){

        // stop the computer turn running
        clearInterval(interval);                        
        aiTurn = false;
        clearFlash();

        // to make it the players turn
        playerTurn = true;

        timer = true;
        time = 5;
        timeOn();     
    }


    if(aiTurn){

        //  to make the computer flash the colors after 200ms
        setTimeout(()=>{
            if(sequence[numOfFlashes]==1){
                flashGreen();
            } else if (sequence[numOfFlashes]==2){
                flashRed();
            } else if (sequence[numOfFlashes]==3){
                flashYellow();
            } else {
                flashBlue();
            }
            numOfFlashes++;
        },200);

    }

    // to decrease the time that the flash appears on the screen
    if(turnNo>=5){
        x = x - 200;
        if(turnNo >=9){
            x = x -200;
            if(turnNo >=13){
                x=x -100;
            }
        }
    }
    setTimeout(clearFlash, x);
}

// player round function with the checks
function playerRound(){

    if(mimic[mimic.length-1] !== sequence[mimic.length-1]){         // if a player gets a color wrong
        clearInterval(interval);                                    // stops computer round from going
        endGame();                                                  // calls endgame function
        
    } else if(turnNo === mimic.length){                             // if player gets the color right
        //alert("PlayerRound: yes");

        turnNo++;                                                   // increase the turn number
        mimic = [];                                                 // empty the mimicing array
        aiTurn=true;                                                // computer us next to start flashing
        numOfFlashes=0;                                             // reseting the number of flashes made
        score++;                                                    // incrementing the score
        scoreCount.innerHTML = (score).toLocaleString('en', {minimumIntegerDigits: 2, useGrouping: false});


        interval = setInterval(compRound, 800);                    // restarting the computer round
    }
}

let limit;         // to store the function

function timeOn(){


            if(timer){
                limit = setInterval(() => {
                time = time - 1;
                console.log("Timer:" + time);

                if(time == 0){
                    clearInterval(limit);
                    clearInterval(interval);
                    endGame();
                    timer = false;
                }

            }, 1000);
        } else {
            time = 5;
            clearInterval(limit);
        }
}


function endGame(){

    // to stop the compround from playing
    clearInterval(interval);                        

    //  to flash the colors 5 times if game ends
    let num = 0;
    for(var i = 0; i < 5; i++){
        (function(i){
            setTimeout(() => {
                noNoise = true;
                flashYellow();
                flashGreen();
                flashBlue();
                flashRed();
                setTimeout(clearFlash,300);
            },500*i);
        })(i);
    }
    if (num >=5) clearInterval(interval2);

    //  to reset the start button and indicator
    play = false;
    indicator.style.backgroundColor = "red";



    // to change the highscore if it is lower than the current score
    if(score > highCount){
        highCount = score;
        highScore.innerHTML = (score).toLocaleString('en', {minimumIntegerDigits: 2, useGrouping: false});

        scoreCount.innerHTML = (score).toLocaleString('en', {minimumIntegerDigits: 2, useGrouping: false});
    } else {

        // Tried to remove this piece of code but for some reason the start button stops working after doing so
        score = 0;
        scoreCount.innerHTML = (score).toLocaleString('en', {minimumIntegerDigits: 2, useGrouping: false});

    }
  
    // resetting all the variables
    mimic = [];
    sequence = [];
    turnNo = 1;
    numOfFlashes = 0;
}


// initialising the flashable elements
const topLeft = document.querySelector("#top-left");
const topRight = document.querySelector("#top-right");
const bottomLeft= document.querySelector("#bottom-left");
const bottomRight = document.querySelector("#bottom-right");

// functions to flash the colors, play the audio files
function flashGreen() {
    //alert("Flash: yes");
    topLeft.classList.add("flash");
    if(!noNoise){
        let beep = document.querySelector("#audio01");
        beep.play();
    }

}
function flashRed() {
    topRight.classList.add("flash");
    if(!noNoise){
        let beep = document.querySelector("#audio02");
        beep.play();
    }

}
function flashYellow() {
    bottomLeft.classList.add("flash");
    if(!noNoise){
        let beep = document.querySelector("#audio03");
        beep.play();
    }

}
function flashBlue() {
    bottomRight.classList.add("flash");
    if(!noNoise){
        let beep = document.querySelector("#audio04");
        beep.play();
    }

}


// function that removes the flash class from the 
function clearFlash(){

    if(topLeft.classList.contains("flash")){
        topLeft.classList.remove("flash");
    }

    if(topRight.classList.contains("flash")){
        topRight.classList.remove("flash");
    }

    if(bottomLeft.classList.contains("flash")){
        bottomLeft.classList.remove("flash");
    }

    if(bottomRight.classList.contains("flash")){
        bottomRight.classList.remove("flash");
    }
}


// event listeners for the colored buttons
topLeft.addEventListener('click' , (event) => {
    // to make the button clickable if it is the players turn
    if(playerTurn){

        mimic.push(1);          // to insert the value of the flash into the mimicing array
        flashGreen();           // to call the corresponding flash function
        setTimeout(clearFlash, 200);    // to clear the flash after 200ms
        playerRound();          // to complete the checks for the player turn to complete after each click
    }
    timer = false;
    clearInterval(limit);
    
});

topRight.addEventListener('click' , (event) => {
    if(playerTurn){
        mimic.push(2);
        flashRed();
        setTimeout(clearFlash, 200);
        playerRound();
    }
    timer = false;
    clearInterval(limit);
    
});

bottomLeft.addEventListener('click' , (event) => {
    if(playerTurn){
        mimic.push(3);
        flashYellow();
        setTimeout(clearFlash, 200);
        playerRound();
    }
    timer = false;
    clearInterval(limit);
    
});

bottomRight.addEventListener('click' , (event) => {
    if(playerTurn){
        mimic.push(4);
        flashBlue();
        setTimeout(clearFlash, 200);
        playerRound();
    }
    timer = false;
    clearInterval(limit);
    
});


