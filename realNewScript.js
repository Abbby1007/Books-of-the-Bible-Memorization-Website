
var click = 0;

function restart(){
  click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "index.html"> <button> Restart </button> </a>'
  }  
}



function realNewQuestion1(){
 click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "realNewQuestion2.html"> <button> Move on </button> </a>'
  }
}

function realNewQuestion2(){
 click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "realNewQuestion3.html"> <button> Move on </button> </a>'
  }
}