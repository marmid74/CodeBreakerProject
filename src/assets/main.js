let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let attemptNumber;

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
          //console.log("hemmelig verdi answer: " + answer.value);
    if (attempt.value == '' || answer.value == '') {
       setHiddenFields();
    }

    if (!validateInput(input.value) ) {
       return;
    }
    attemptNumber += 1;
    attempt.value = attemptNumber;
    console.log("attemt nr: " + attempt.value);

      if(getResults(input)) {
        setMessage("You win! :)");
    } else {
        if(attemptNumber <10) {
          setMessage("Incorrect, try again.");
        } else {
          setMessage("You loose! :(");
        }
    };
}

//implement new functions here

function setHiddenFields(){

  let randomNumber  = Math.floor((Math.random()*10000));
  answer.value = randomNumber.toString();
  while (answer.value.length < 4) {
    answer.value = "0"+ answer.value;
  }
  attempt.value = "0";
  attemptNumber = 0;
  console.log("hemmelig verdi:" + answer.value);
  return answer;

}

function setMessage(messageInput){
    document.getElementById('message').innerHTML = messageInput;
}

function validateInput(input) {
  if (input.length === 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input){
  let inputToString = input.value;
  let answerToString = answer.value;
  let numbersCorrect = 0;
         console.log("Inne i getResults: " + inputToString +"  "+ inputToString.length);
         console.log("Inne i getResults: " + answerToString +"  "+ answerToString.length);
         console.log(document.getElementById('results').innerHTML);
  let  tempHTML = '<div class="row">\n\t<span class="col-md-6">' + input.value + '</span>\n\t<div class="col-md-6">\n';

  for (let i = 0; i< inputToString.length; i++) {
        console.log("Inne i for: ");
    if (inputToString[i] === answerToString[i]) {
      tempHTML += '<span class="glyphicon glyphicon-ok"></span>';
      numbersCorrect ++;
    } else if (inputToString[i] === answerToString[0] ||
                inputToString[i] === answerToString[1] ||
                inputToString[i] === answerToString[2] ||
                inputToString[i] === answerToString[3])  {
      tempHTML += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      tempHTML += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  tempHTML += '\t</div>\n</div>';
  console.log(tempHTML);
  document.getElementById('results').innerHTML += tempHTML;

  if (numbersCorrect === 4) {
    return true;
  } else {
    return false
  }
}
