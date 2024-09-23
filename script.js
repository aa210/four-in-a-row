const scoreBoard = {
  you: 0,
  computer: 0,
}

var resetButton = document.getElementById("reset");

var yourScore = document.getElementById("your-score");
var computerScore = document.getElementById("computer-score");

var winningNumbersComp=[["1","2","3","4"],
["5", "6", "7", "8"],
["9","10", "11", "12"] ,
["13","14","15","16"],
["1","5","9","13"],
["2","6","10","14"],
["3", "7", "11", "15"],
["4", "8", "12", "16"],
["1", "6", "11", "16"],
["4", "7", "10", "13"]];

var winningNumbersUser=[["1","2","3","4"],
["5", "6", "7", "8"],
["9","10", "11", "12"] ,
["13","14","15","16"],
["1","5","9","13"],
["2","6","10","14"],
["3", "7", "11", "15"],
["4", "8", "12", "16"],
["1", "6", "11", "16"],
["4", "7", "10", "13"]];

var options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

var computerChoices = [];
var userChoices = [];
var keys = document.querySelectorAll(".keys");
var resultDiv = document.getElementById("resultDiv");



function checkDraw() {
if(options.length < 1 && resultDiv.innerHTML!=="You Won!" && resultDiv.innerHTML!=="Computer wins...") {
       resultDiv.innerHTML ="Draw";
       resetButton.innerHTML="Play Again";
   }
}


function resetGame() { 
  computerChoices = [];
 userChoices = [];
  options = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16"];
  winningNumbersComp =[["1","2","3","4"],
["5", "6", "7", "8"],
["9","10", "11", "12"] ,
["13","14","15","16"],
["1","5","9","13"],
["2","6","10","14"],
["3", "7", "11", "15"],
["4", "8", "12", "16"],
["1", "6", "11", "16"],
["4", "7", "10", "13"]];
  winningNumbersUser =[["1","2","3","4"],
["5", "6", "7", "8"],
["9","10", "11", "12"] ,
["13","14","15","16"],
["1","5","9","13"],
["2","6","10","14"],
["3", "7", "11", "15"],
["4", "8", "12", "16"],
["1", "6", "11", "16"],
["4", "7", "10", "13"]];
   resetButton.innerHTML="Reset";
resultDiv.innerHTML = userChoices;
   for (var i = 0; i < keys.length; i++) {
     keys[i].style.backgroundColor = "white";
     keys[i].style.color = "white";
}
}

function getRandomComputerChoice() { 
  //challenge code
 
  /*
 for (var h = 0; h<  winningNumbersUser.length; h++)
    {
      if( winningNumbersUser[h].length == 1) {
     // for (var e = 0; e < options.length; e++) {
     // if(options[e] == winningNumbersUser[h][0]) {
       var selected =  winningNumbersUser[h][0];
      } else {    
       
      // console.log(randomIndex);
      }
    
    }  
    }  
     */
   
        

const randomIndex = Math.floor(Math.random() * options.length);
 var selected= options[randomIndex]; 
  
  
 if ( options.length>0 ) 
{   document.getElementById(selected).style.backgroundColor = "red";
document.getElementById(selected).style.color = "red"; 
} 
 
for (var i = 0; i < options.length; i++) { 
  if (options[i] === selected) {
computerChoices.push(selected); 
 options.splice(i,1);   
  checkComputerResult();
    updateScore();
  } 
}
};
      
  

function checkUserResult() { 
  for (var a=0; a < userChoices.length; a++){
for (var i = 0; i < winningNumbersUser.length; i++) {
  var selection = winningNumbersUser[i];
   for(var j = 0; j < selection.length; j++) {
     if(selection[j] == userChoices[userChoices.length-1]) {
       selection.splice(j, 1);
       for(var k = 0; k < winningNumbersUser.length; k++) {
    if(winningNumbersUser[k].length < 1) {
      resultDiv.innerHTML="You Won!";
   console.log("you win");
   options=[];
      resetButton.innerHTML="Play Again";
     } else {
      checkDraw();
     }
}
  }
   }
}
}
}

function checkComputerResult() {
 
  for (var a=0; a < computerChoices.length; a++){
for (var i = 0; i < winningNumbersComp.length; i++) {
  var selection = winningNumbersComp[i];
   for(var j = 0; j < selection.length; j++) {
     if(selection[j] == computerChoices[computerChoices.length-1]) {
       selection.splice(j, 1);
       for(var k = 0; k < winningNumbersComp.length; k++) {
    if(winningNumbersComp[k].length < 1) {
      console.log("computer won");
      resultDiv.innerHTML ="Computer wins...";
       options = [];
      resetButton.innerHTML="Play Again";
     } else {
     checkDraw();
     }
}
  }
}
}
}
}


/*code for user selection */
  for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
 var btnVal = this.innerHTML; 
     if ( options.length>0 && this.style.backgroundColor !== "red") 
{  
    this.style.backgroundColor = "blue";
    this.style.color = "blue";
}
      for (var i = 0; i < options.length; i++) { 
  if (options[i] === btnVal) {
    userChoices.push(btnVal);
    options.splice(i, 1); 
    checkUserResult();
    updateScore();
  if(resultDiv.innerHTML!=="You Won!") {
    getRandomComputerChoice();
   
                                       }
}  
  }
  }
 }

var updateScore = function(){
if (resultDiv.innerHTML ==
"Computer wins..."){
  scoreBoard.computer +=1;
      console.log(scoreBoard);
      computerScore.innerText
        = "Computer: " + scoreBoard.computer;
} 
else if
  (resultDiv.innerHTML=="You Won!"){
   scoreBoard.you +=1;
  console.log(scoreBoard);
      yourScore.innerText 
        = "You: " + scoreBoard.you;
}

}




