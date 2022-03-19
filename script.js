//global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

const mistakeLabel = document.querySelector("#mistakeLabel");

// audio
const audioStart = document.querySelector("#audioStart");
const audioVictory = document.querySelector("#audioVictory");
const audioError = document.querySelector("#audioError");
const audioStop = document.querySelector("#audioStop");

//timer
let timerContent = document.querySelector(".timer");
let count = 10;
let clear;

//fireworks
const fireDiv = document.querySelector(".fireworksDiv");
const fireworks = new Fireworks(fireDiv,{});

// congrat
const congratLabel = document.querySelector("#congratLabel");

//level
const levelLabel = document.querySelector(".level");
//Global Variables
let clueHoldTime = 1000;
let mistake = 0;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function countTimer(){
  count--;
  timerContent.innerHTML = count;
  if(count == -1){
    resetTimer();
    beginTimer();
    showMistakeLabel();
  }
}
function beginTimer(){
  if(gamePlaying)
  clear = setInterval(countTimer,1000);
}
function pauseTimer(){
  clearInterval(clear);
}
function resetTimer(){
  clearInterval(clear);
  count = 10;
  timerContent.innerHTML = count;
}

function generateRandPattern(){
  pattern = [];
  for(let i = 0 ; i < 8 ; i++){
    let rand = Math.floor(Math.random() * 6) + 1;
    pattern.push(rand);
  }
  console.log(pattern);
}
function showMistakeLabel(){
  mistake++;
  audioError.play();
  mistakeLabel.innerHTML = `Mistake : ${mistake}`;
  if (mistake == 3){
    loseGame();
    stopGame();
    pauseTimer();
}
}
function startGame(){
  levelLabel.innerHTML = 0;
  resetTimer();
  audioVictory.currentTime = 0;
  audioStart.play();
  audioVictory.pause();
  fireworks.stop();
  clueHoldTime = 1000;
  mistake = 0;
  mistakeLabel.innerHTML = `Mistake : 0`;
  generateRandPattern()
  progress = 0;
  gamePlaying = true;
  congratLabel.classList.add("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  resetTimer();
  mistake = 0;
  fireworks.stop();
  audioStop.play();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 230.2,
  6: 423.6
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  pauseTimer();
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  resetTimer();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 110;
  pauseTimer();
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + " " + clueHoldTime + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    setTimeout(beginTimer, delay);
  }
  levelLabel.innerHTML = progress;
}
function loseGame(){
  stopGame();
  mistake = 0;
  mistakeLabel.innerHTML = `Mistake: ${mistake}`;
  resetTimer();
  pauseTimer();
  alert("Game Over. You lost.");
}
function winGame(){
  resetTimer();
  stopGame();
  fireworks.start();
  levelLabel.innerHTML = progress + 1;
  audioVictory.play();
  congratLabel.classList.remove("hidden");
  alert("Game Over. You won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        levelLabel.innerHTML = progress + 1;
        winGame();
      }else{
      progress++;
      playClueSequence();
    }
  }else{
    guessCounter++;
  }
}else{
    showMistakeLabel();
  }
}
// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)