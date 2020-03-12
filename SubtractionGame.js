
 var num1;
 var num2;
 var answerTxt;
 var answerNum;
 var problemsSoFar;
 var myMap;
 var userAnswers = [];


function createNumbers(){
	 num1 = Math.round(Math.random()*10);
	 num2 = Math.round(Math.random()*10);
	if (num1 > num2){
		answerTxt = num1 + " - " + num2 + " = ";
	    answerNum = num1 - num2;
	}
	else {
		 answerTxt = num2 + " - " + num1 + " = ";
		answerNum = num2 - num1;
	}
	
	//cument.getElementById("num1").innerHTML = num1;
	//cument.getElementById("num2").innerHTML = num2;
	//cument.getElementById("answerTxt").innerHTML = answerTxt;
	//cument.getElementById("answerNum").innerHTML = answerNum;

	//document.write(answerTxt);
}

function checkAnswer(){
	answerTxt = Array.from(myMap.keys())[problemsSoFar];
	answerNum= myMap.get(answerTxt);
	var n = document.getElementById('myInput').value;
	var n = parseInt(n);
	var result2 = "That is correct";
	var result1 = "That is not correct";
	if(n == answerNum){
		document.getElementById("res2").innerHTML = result2;
		fillUserAnswers("correct");
	} else {
		document.getElementById("res2").innerHTML = result1;
		fillUserAnswers("incorrect");
	}
	document.getElementById("res2").style.visibility="visible";
}
			
	


function createMap(){
	problemsSoFar = 0;
	myMap = new Map();
	for (i = 0; i<=10; i++){
		myMap.set(answerTxt,answerNum);
		createNumbers();
	}

}

function newProblem(){
	problemsSoFar++;
	if (problemsSoFar >10){
		var goneTooFar = "You have practiced enough problems.";
		document.write(goneTooFar);
	}
	answerTxt = Array.from(myMap.keys())[problemsSoFar];
	document.getElementById("problem")  = answerTxt;
	answerNum= myMap.get(answerTxt);
	
	//answerTxt = problem;
	//answerNum = myMap.get(problem);
}

function fillUserAnswers(input){
userAnswers[problemsSoFar] = input;
}

