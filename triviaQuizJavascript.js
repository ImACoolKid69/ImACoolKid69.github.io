i = 1 
            answerDelay = 200;
            checkAnswerDelay = answerDelay + 100;
            totalNumberOfQuestion = 10;
            numberOfCorrectAnswers = 0;

            function main() { 
    
                if (i == 1) {
                   
                    document.view.qnum.value = i; 
                    document.view.question.value = "What is the tallest mountain in the world?\na) Mount Kilimanjaro \nb) Mount Everest\nc) Mount Makalu ";

                    correct = "b" 

                   setTimeout( pop, answerDelay);               

                } 
                else if (i == 2) {
                    document.view.qnum.value = i; 
                    document.view.question.value = "What is the biggest country in the world?\na) Canada\nb) U.S.A\nc) Russia ";
                    

                    correct = "c" 
                    setTimeout( pop, answerDelay);                

                } 
                else if (i == 3) {
                    document.view.qnum.value = i;
                    document.view.question.value = "What is the smallest country in the world?  \na) France \nb) Cuba \nc) Vatican City ";
                    correct = "c"
                    setTimeout( pop, answerDelay);
                 
                } else if (i == 4) {
                    document.view.qnum.value = i;
                    document.view.question.value = "How many people are on the earth? \na) 7 Billion \nb) 5 Billion \nc) 9 Billion ";
                    correct = "a"
                    setTimeout( pop, answerDelay);
                  
                } else if (i == 5) {
                    document.view.qnum.value = i;
                    document.view.question.value = "What is the biggest continent in the world? \na) North America \nb) Africa \nc) Asia ";
                    correct = "c"
					setTimeout( pop, answerDelay);
                    
                   
                } else if (i == 6) {
					document.view.qnum.value =  i;
					document.view.question.value = "What is the biggest ocean in the world? \na) Atlantic Ocean \nb) Pacific Ocean  \nc) Indian Ocean ";
					correct = "b"
					setTimeout( pop, answerDelay);
				}  else if (i == 7) {
					document.view.qnum.value =  i;
					document.view.question.value = "What country consists of the most people? \na) India \nb) China \nc) Russia ";
					correct = "b"
					setTimeout (  pop , answerDelay);
				} else if (i == 8) {
					document.view.qnum.value = i;
					document.view.question.value = "What is the longest river in the world? \na) Amazon River \nb) Yellow River \nc) Lena River";
					correct = "a"
					setTimeout ( pop , answerDelay);
				} else if (i == 9) {
					document.view.qnum.value = i;
					document.view.question.value = "What is the tallest tower in the world? \na) Tokyo Skytree \nb) Burj Khalifa \nc) CN Tower ";
					correct = "b"
					setTimeout ( pop , answerDelay);
				} else if (i == 10) {
					document.view.qnum.value = i;
					document.view.question.value = "What is the biggest Island in the world? \na) Greenland \nb) Hawaii \nc) Maui ";
					correct = "a"
					setTimeout ( pop , answerDelay);
				} else if (i == 11) {
					correctAnswers()
				}
				
																											
        
                 setTimeout( checkAnswer, checkAnswerDelay);

            } 

            function pop() {

                ans = prompt(i + '.)    ENTER LETTER >>   a,   b,   c,   d') 

            }

            function checkAnswer() {

               
               console.log("checkAnswer untion called");

                if (correct == ans) { 

                    document.view.question.value = " You are right!" 
                    numberOfCorrectAnswers++;

                } else {
                    document.view.question.value = " You are wrong" 
                }

                i++; 
                calulatePercent();

            }

            function calulatePercent() {

               percentage = numberOfCorrectAnswers / totalNumberOfQuestion * 100;

              console.log("your percentage is: " + percentage + "%");
			}
			
			function correctAnswers() {
				
			if (numberOfCorrectAnswers >= 8) {
				alert("Congratulations, you've passed this quiz and are now a geography expert!!!!")
			}
			else {
				alert("Sorry, you didn't score high enough to pass. Please try again!?!")
			}
			}