var click = 0;

function restart(){
  click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "index.html"> <button> Restart </button> </a>'
  }  
}



function newQuestion1(){
 click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "newQuestion2.html"> <button> Move on </button> </a>'
  }
    
}
function newQuestion2(){
 click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "newQuestion3.html"> <button> Move on </button> </a>'
  }

}

function newQuestion3(){
 click ++;
  if(click === 1){
    document.getElementById("button-appear").innerHTML = '<a href = "newQuestion4.html"> <button> Move on </button> </a>'
  }

}

