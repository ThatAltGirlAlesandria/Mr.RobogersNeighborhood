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

Expected Output: 