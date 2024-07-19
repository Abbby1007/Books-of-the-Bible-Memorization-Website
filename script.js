const buttonA = document.getElementById('choiceA');

const buttonB = document.getElementById('choiceB');

const buttonC = document.getElementById('choiceC');

const buttonD = document.getElementById('choiceD');

const display = document.getElementById("result");

const rockButton = document.getElementById('ROCK');

// rockButton.addEventListener('click', () => playRound('ROCK'));

// buttonA.addEventListener('click', () => questionOne('choiceA'));

// buttonB.addEventListener('click', () => questionOne('choiceB'));

// buttonC.addEventListener('click', () => questionOne('choiceC'));

// buttonD.addEventListener('click', () => questionOne('choiceD'));

// function questionOne(playerChoice){
//   if(playerChoice === 'choiceA'){
//     buttonfunction();

//   display.textContent = "HEllo World :DDDDD"
//   }
// }


function buttonfunction() {
  document.getElementById("button-appear").innerHTML = '<a href = "secondlevel.html"> <button> Move on </button> </a>'
}

function move(){
  document.getElementById("button-appear").innerHTML = '<a href = "thirdlevel.html"> <button> Move on </button> </a>'
}