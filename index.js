const currentPosition = Math.floor(Math.random() * 63) + 1;
let remainder = currentPosition % 8;
let quotient = currentPosition / 8;
const getUserInput = prompt(`Current Position : ${currentPosition}
Enter the position to move (like s4 s for south and 4 for movement value)`);
let direction;
let value;
let finalPosition;
const userInput = [...getUserInput];
if(userInput.length === 3){
direction = userInput.slice(0,2).join('').toLowerCase();
value = parseInt(userInput.slice(2).join());
}else if(userInput.length === 2){
direction = userInput.slice(0,1).join().toLowerCase();
value = parseInt(userInput.slice(1).join());
}
switch(direction){
    case "w" :
        if(validCheck())
        finalPosition = currentPosition - value;
        break;
    case "e" :
        if(validCheck())
        finalPosition = currentPosition + value;
        break;
    case "n" :
        if(validCheck())
        finalPosition = currentPosition - (value * 8);
        break;
    case "s" :
        if(validCheck())
        finalPosition = currentPosition + (value * 8);
        break;
    case "ne" :
        if(validCheck())
        finalPosition = currentPosition - ((value * 8) - value);
        break;
    case "nw" :
        if(validCheck())
        finalPosition = currentPosition - ((value * 8) + value);
        break;
    case "se" :
        if(validCheck())
        finalPosition = currentPosition + ((value * 8) + value);
        break;
    case "sw" :
        if(validCheck())
        finalPosition = currentPosition + ((value * 8) - value);
        break;
}
if(finalPosition)
    console.log(finalPosition);
else
    console.log("INVALID MOVE or INVALID INPUT");