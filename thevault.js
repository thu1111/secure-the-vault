/* Pseudocodes
1. create a variable message1 to store a message to user.
2. create three number variables and assign each with the result of calculation using a unique arithmetic operator.
3. (optional)create a variable outputString that stores the desired message with all the variables properly arranged
4. show user the finalMessage with alert()
*/

//Create a variable assigned with message string for user
const message1 =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//assign num1 with a calculation that results the number 10
const num1 = 40 / 4;

//assign num1 with a calculation that results the number 40
const num2 = 25 + 15;

//assign num1 with a calculation that results the number 39
const num3 = 45 - 6;

//combine all the message and number combination
let finalMessage = `${message1} ${num1} - ${num2} - ${num3}`;

//print final message to the user
alert(finalMessage);
