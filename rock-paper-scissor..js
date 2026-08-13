console.log("1 --> Rock");
console.log("2 --> Paper");
console.log("3 --> Scissor");

let user = parseInt(prompt("Enter your choice:"));

let comp = Math.floor(Math.random() * 3) + 1;

console.log("Comp number:", comp);
console.log("your number:", user);

switch (user) {

    case 1: 
        if (comp === 1){ 
            console.log("Draw");
        }
        else if (comp === 2){
             console.log("Computer Wins");
        }
        else {console.log("User Wins");
        break;
        }
    case 2: 
        if (comp === 2){
             console.log("Draw");
        }
        else if (comp === 3){ 
            console.log("Computer Wins");
        }
        else {
            console.log("User Wins");
             break;
            }
       
    case 3: 
        if (comp === 3){

         console.log("Draw");
        }
        else if (comp === 1) {
            console.log("Computer Wins");
        }
        else{
             console.log("User Wins");
        break;
        }

    default:
        console.log("Invalid choice");
}

