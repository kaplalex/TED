var aone = document.querySelectorAll(".aone");
var qone = document.querySelector(".qone");
var whyX = document.querySelector(".why-x");
var whyY = document.querySelector(".why-y");
var behaviorX = document.querySelector(".behavior-x");
var behaviorY = document.querySelector(".behavior-y");
var continueX = document.querySelector(".continue-x");
var continueY = document.querySelector(".continue-y");
var a14 = document.querySelector(".contributeInterest");
var b14 = document.querySelector(".otherInterest");
var q18 = document.querySelector(".hypo");
var q19 = document.querySelector(".hypoTwo");
var qtopics = document.querySelector(".qtopics");
var other = document.querySelectorAll(".other");
var none = document.querySelector(".none");
var otherList = Array.from(other);
var no = document.querySelector(".ycontinue");
var more = document.querySelector(".more");
var lastQuestions = document.querySelector(".lastQuestions");

//make function that displays y sections and hides x sections if 0 or 1 are selected and hides y and displays x if 1 2 or 3 are selected. 
qone.onclick = function(){adaptDisplay()}

function adaptDisplay(){
  if (aone[0].checked || aone[1].checked){
    whyX.style.display = "none";
    whyY.style.display = "inline-block";
    behaviorX.style.display = "none";
    behaviorY.style.display = "inline-block";
    continueX.style.display = "none";
    continueY.style.display = "inline-block";
  } else {
    whyY.style.display = "none";
    whyX.style.display = "inline-block";
    behaviorY.style.display = "none";
    behaviorX.style.display = "inline-block";
    continueY.style.display = "none";
    continueX.style.display = "inline-block";
  }
}



//make function that displays 14 b if 13 is na and 14 if anything else.
//make function that unchecks not if checkbox is checked and unchecks checkbox id radio is checked
//make function that checks if checkbox is checked
function checkIfChecked(arr){
    for (var i = 0; i<arr.length; i++){
     if (arr[i].checked){
      return true
      }
    }
}

//run function when question is clicked
qtopics.onclick = function(){
  changeCheck();
}


//function that unchecks all
function uncheckAll(arr){
    for (var i = 0; i<arr.length; i++){
     arr[i].checked = false;
    }
}

none.onclick = function(){
  uncheckAll(otherList);
  none.checked = true;
  a14.style.display = "none";
  b14.style.display = "inline";
}
 
function changeCheck(){
  if (checkIfChecked(otherList)){
    none.checked = false;
    b14.style.display = "none";
    a14.style.display = "inline";
  }
}

more.onclick = function(){
  if (no.checked){
    lastQuestions.style.display = "inline";
  } else {
    lastQuestions.style.display = "none";
  }
}

function adapt14(){
  
  if (aone[0].checked || aone[1].checked){
    whyX.style.display = "none";
    whyY.style.display = "inline-block";
    behaviorX.style.display = "none";
    behaviorY.style.display = "inline-block";
    continueX.style.display = "none";
    continueY.style.display = "inline-block";
  } else {
    whyY.style.display = "none";
    whyX.style.display = "inline-block";
    behaviorY.style.display = "none";
    behaviorX.style.display = "inline-block";
    continueY.style.display = "none";
    continueX.style.display = "inline-block";
  }
}
//fix left margin/padding
//adapt questions 14 18 19