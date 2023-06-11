function beepBoop(input) {
  let inputValue = []
  const inputNumber = parseInt(input);
    for(let i = 0; i <= inputNumber; i+=1) {
        inputValue.push(i.toString());
    }
    return inputValue;
  }

function ifMrRobogersNeighborhood(inputValue) {
  const roboArray = inputValue.map((element) => {
    if (element.includes("3")) {
      return "Won't you be my neighbor?";
  } else if (element.includes("2")) {
      return "Boop";
  } else if (element.includes("1")) {
      return "Beep";
  } else {
    return element;
  }
});
  return roboArray.join(", ");
};

function mrRobogersNeighborhood(e) {
  e.preventDefault();
  const userInput = document.getElementById("input-number").value;
  const newValue = ifMrRobogersNeighborhood(beepBoop(userInput));
  const userOutput = document.getElementById("outPut");
  userOutput.innerText = newValue;
  userOutput.removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("user-input");
  form.addEventListener("submit", mrRobogersNeighborhood)
});