Test Driven Development:

Describe: beepBoop();

Test: "It will show the value of the input"
Code: 
>function beepBoop(input) {
  let inputVal = []
  const inputNumber = parseInt(input); {
    return inputVal;
  }
}
>inputVal = 13;
Expected Output: 13

Test: "It will run a loop on the numbers"
Code: function beepBoop(input) {
  let inputVal = []
  const inputNumber = parseInt(input);
    for(let i=0; i<=inputNumber; i+=1>)  {
    inputVal.push(i.toString());
  }
  return inputVal;
}

Expected Output: 1, 3

Describe: ifMrRobogersNeighborhood

Test: "It will create an new array with a map element."
Code:
funciton ifMrRobogersNeighborhood(inputVal) {
  const roboArray = inputVal.map((element) => {

  })
}

Expected Output: None until ifMrRobgersNeighorhood function is delcared with else if statements.

Test: "It will return beep when a user has an input of 1."

Code:
function ifMrRobogersNeighborhood(inputVal){
  const roboArray = inputVal.map((elemnet) =>{
    if (element.includes("1"))
      return "Beep";
  })
}

Expected OutPut: >13
>Beep3

Test: "It will return Boop when a user has an input of 2."
Code:
function ifMrRobogersNeighborhood(inputVal){
  const roboArray = inputVal.map((elemnet) =>{
    if (element.includes("1"))
      return "Beep";
    } else if (element.includes("2")) {
      return "Boop"
    })
}
Expected Output: >12
BeepBoop

Test: "It will return Won't you be my neighbor? when a user has an input of 3."
code: 
function ifMrRobogersNeighborhood(inputVal){
  const roboArray = inputVal.map((elemnet) =>{
    if (element.includes("3"))
      return "Won't you be my neighbor?";
    } else if (element.includes("2")) {
      return "Boop"
    } else if (element.includes("1")){
      return "Beep";
    });
}

Expected Output: >321
>Won't you be my neighbor?BoopBeep

