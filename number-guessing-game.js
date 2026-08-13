const targetNumber = Math.floor(Math.random() * 100) + 1;
const targetNumber2 = Math.floor(Math.random() * 100) + 1;
let guess;
let guess1; 
console.log(targetNumber);
console.log(targetNumber2);
   let attamt1=0;
   let attamt2=0;
   
   while (guess!=targetNumber ){
    guess = parseInt(prompt("Enter your guess"));
  if(guess===targetNumber){
    console.log("user 1 gussed number");
    break;
  }
  

  else if (guess < targetNumber) {
    console.log("Too low ");
attamt1++;
  }
    
  else if (guess > targetNumber) {
    console.log("Too high");
    attamt1++;
  }  
  console.log("_________________________");
}
   while (guess1!=targetNumber2 ){
    guess1 = parseInt(prompt("Enter your guess1"));
  if(guess1===targetNumber2){
    console.log("user 2 gussed number");
    break;
  }
  

  else if (guess1 < targetNumber2) {
    console.log("Too low ");
attamt2++;
  }
    
  else if (guess1 > targetNumber2) {
    console.log("Too high");
    attamt2++;
  } 
}
   
if(attamt1===attamt2){
  console.log("try again")
}
else if(attamt1<attamt2){
  console.log("user 1 is win")
}
else if(attamt1>attamt2){
  console.log("user 2 is win")
}
