 var num1;
 var num2;
 var answerTxt;
 var answerNum;
 var problemsSoFar;
 var myMap;
 var userAnswersWord;
 var userAnswersNum;
 var numCorrect = 0;
 var numIncorrect = 0;
 var percentCorrect;
 var percentIncorrect;
 //var allProblems = [];


function createNumbers(){
	userAnswersWord = [];
	userAnswersNum = [];
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
	var result1 = "That is not correct. Correct answer: " + answerNum;
	
	if(n == answerNum){
		document.getElementById("res2").innerHTML = result2;
		fillUserAnswers("correct",n);
		numCorrect++;
	} else {
		document.getElementById("res2").innerHTML = result1;
		fillUserAnswers("incorrect",n);
		numIncorrect++;
	}
	document.getElementById("res2").style.visibility="visible";
	
}
			
	


function createMap(){
	problemsSoFar = 0;
	myMap = new Map();
	for (i = 0; i<=10; i++){
		//allProblems[i] = answerTxt;
		myMap.set(answerTxt,answerNum);
		createNumbers();
	}

}

function newProblem(){
	document.getElementById("soFar").innerHTML = problemsSoFar+2;
	document.getElementById("soFar").style.visibility="visible";
	problemsSoFar++;
	if (problemsSoFar >9){
		
		var goneTooFar = "you have done enough problems.";
		document.write(goneTooFar);
		//break;		
	}
	else{
		answerTxt = Array.from(myMap.keys())[problemsSoFar];
		var element = document.getElementById("problem");
		element.innerHTML  = answerTxt;
		answerNum= myMap.get(answerTxt);
		generateReport();
	}
	
	//answerTxt = problem;
	//answerNum = myMap.get(problem);
}

function fillUserAnswers(wordinput, numinput){
	userAnswersWord[problemsSoFar] = wordinput;
	userAnswersNum[problemsSoFar] = numinput;
}

function generateReport(){
	var userAnswersWordString = "";
	var userAnswersNumString = "";
	var allProblemsString = "";
	for (i=0; i<=9; i++){
		userAnswersWordString += userAnswersWord[i] + ".";
		userAnswersNumString += userAnswersNum[i] + ".";
		allProblemsString += Array.from(myMap.keys())[i] + ".";
	}
	userAnswersWordString += userAnswersWord[10];
	userAnswersNumString += userAnswersNum[10];
	allProblemsString += allProblems[10];
	localStorage.setItem('userResponse',userAnswersWordString);
	localStorage.setItem('userNumbers',userAnswersNumString);
	localStorage.setItem('allProblems',allProblemsString);

}


