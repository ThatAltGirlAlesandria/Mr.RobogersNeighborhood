# _Mr Roboger's Neighborhood_

#### By Alesandria Wild

## This webpage show cases loops and array's by asking a user to enter a number, and changing the output depending on the paramator's of the array.

## To access the working page please [click here.](https://thataltgirlalesandria.github.io/Mr.RobogersNeighborhood/)

## Technologies Used

* HTML
* CSS
* Dillinger.io
* VSCode
* GitHub Pages
* JavaScript
* MDN 

## Description

Mr.Roboger's neighborhood, welcomes users to the neighborhood. After welcoming the users, it asks for a number input from the user, then changes some of the numbers. 
* 1's become "Beep"
* 2's become "Boop"
* 3's become "Won't you be my neighbor?"

The page offers the user to restart the process if they wish by simply putting in a new number. Once the user puts in a new number and presses the button that says, "Press for MAGIC!" a new output will appear.

## Setup/Installation Requirements

## Setup/Installation Requirements

To access the code in a text editor:

#### To access the code in a source code editor: 
```bash
$ git clone https://github.com/helen-lehrer/Mr-Robogers-Neighborhood
$ cd programming-language-suggester
$ code .
```
To view the webpage, simply preview index.html in your browser.
---

For GitHub page direct link [click here](https://github.com/ThatAltGirlAlesandria/Mr.RobogersNeighborhood.git)


## Tests: 
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
Code: 
>function beepBoop(input) {
  let inputVal = []
  const inputNumber = parseInt(input);
    for(let i=0; i<=inputNumber; i+=1>)  {
    inputVal.push(i.toString());
  }
  return inputVal;
}

Expected Output: 13

Describe: ifMrRobogersNeighborhood
Test: "It will create an new array with a map element."
Code:
>funciton ifMrRobogersNeighborhood(inputVal) {
  const roboArray = inputVal.map((element) => {
  })
}

Expected Output: None until ifMrRobgersNeighorhood function is delcared with else if statements.

Test: "It will return beep when a user has an input of 1."
Code:
>function ifMrRobogersNeighborhood(inputVal){
  const roboArray = inputVal.map((elemnet) =>{
    if (element.includes("1"))
      return "Beep";
  })
}

Expected OutPut: 
>13 
>Beep

Test: "It will return Boop when a user has an input of 2."
Code:
>function ifMrRobogersNeighborhood(inputVal){
  const roboArray = inputVal.map((elemnet) =>{
    if (element.includes("1"))
      return "Beep";
    } else if (element.includes("2")) {
      return "Boop"
    })
}

Expected Output: >12
>Boop

Test: "It will return Won't you be my neighbor? when a user has an input of 3."
code: 
> function ifMrRobogersNeighborhood(inputVal){
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
>Won't you be my neighbor?

Test: "Adding an else statement incase a users input does not have a 1, 2, or, 3 in it."
Code:
> function ifMrRobogersNeighborhood(inputVal){
  const roboArray = inputVal.map((elemnet) =>{
    if (element.includes("3"))
      return "Won't you be my neighbor?";
    } else if (element.includes("2")) {
      return "Boop"
    } else if (element.includes("1")){
      return "Beep";
    } else {
      return element;
    });
    return roboArray;
}

Expected Outut:>7
>7

Test: "Converting user input into new values."
Code
>function mrRobogersNeighborhood(e){
  const userInput = document.getElementById("input-number").value;
  const newValue = ifMrRobogersNeighborhood(beepBoop(userInput));
  const userOutput = document.getElementById("outPut");
  userOutput.innerText = newValue;
  userOutput.removeAttribute("class");
}

Expected Output: >123
>0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor?, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Boop, Boop, Won't you be my neighbor?, Boop, Boop, Boop, Boop, Boop, Boop, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, 40, Beep, Boop, Won't you be my neighbor?, 44, 45, 46, 47, 48, 49, 50, Beep, Boop, Won't you be my neighbor?, 54, 55, 56, 57, 58, 59, 60, Beep, Boop, Won't you be my neighbor?, 64, 65, 66, 67, 68, 69, 70, Beep, Boop, Won't you be my neighbor?, 74, 75, 76, 77, 78, 79, 80, Beep, Boop, Won't you be my neighbor?, 84, 85, 86, 87, 88, 89, 90, Beep, Boop, Won't you be my neighbor?, 94, 95, 96, 97, 98, 99, Beep, Beep, Boop, Won't you be my neighbor?, Beep, Beep, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Won't you be my neighbor?, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Boop, Boop, Won't you be my neighbor?
## Known Bugs

No known bugs at this current time.

## License
 MIT License
Copyright (c) _2023_ _Alesandria Wild_