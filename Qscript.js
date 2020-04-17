//Start Game Function
function startGame()
{
    //alert("start quiz")
    var button = $("#startBtn");
    button.addClass("hide");
    
    $("#nextBtn").removeClass("hide");
    $("#Qcontainer").removeClass("hide");
    
}
//Function to show initial set of questions (this is different to the function which shows the remaining sets of questions)
function showQuestion()
{
    //counter for tracking number of questions
    i = 0;
    
    questionInfo = questions[i];
    //Display Question
    $("#question").text(questionInfo.question);
    
    for (var j=0;j<questionInfo.answers.length;j++)
    {   
        //create new button to append solutions to
        newBtn = $("<button>");  
        newBtn.text(questionInfo.answers[j].text);
        newBtn.attr("correct",questionInfo.answers[j].correct);
        newBtn.addClass("btn-dark selectAns");
        $("#answerBtn").append(newBtn);
        $(".selectAns").off("click");
        //Event Listener for correct answer
        $(".selectAns").on("click",function()
        {   
            if($(this).attr("correct")=="true")
            {
                 //Modal to show that answer selected is correct
                $("#correctModal").modal('show');
                //Jquery for Next Question Button
                $("#nextQ").on("click",function()
                {   
                    //Empty the question container
                    $("#answerBtn").empty();
                    //Go to next question when click next
                    showNextQuestion();
                    $("#correctModal").modal('hide');
                })
            }
            else
            {
                //Show wrong modal
                $("#wrongModal").modal('show');
            }
        
        })
    }    
        
    
}

function showNextQuestion()
{
    //increment question counter by 1
    i++;
    questionInfo = questions[i];
    
    if (questionInfo != null)
    {
        //Display Question
        $("#question").text(questionInfo.question);
        //Iterates through the array that holds the questions and displays to question container
        for (var j=0;j<questionInfo.answers.length;j++)
        {   
            //create new button to append solutions to
            newBtn = $("<button>");  
            newBtn.text(questionInfo.answers[j].text);
            //Add attritute to new button that defines whether the solution is correct/incorrect
            newBtn.attr("correct",questionInfo.answers[j].correct);
            newBtn.addClass("btn-dark selectAns");
            $("#answerBtn").append(newBtn);
            //Turn off all clicks - reset state
            $(".selectAns").off("click");
            //Event Listener for correct answer
            $(".selectAns").on("click",function()
            {   
                //Determine if results is true/false
                if($(this).attr("correct")=="true")
                {
                    //Show pop-up stating correct answer
                    $("#correctModal").modal('show');
                    //Jquery for Next Question Button
                    $("#nextQ").on("click",function()
                    {   
                        //Empty the question container
                        $("#answerBtn").empty();
                        //Go to next question when click next
                        showNextQuestion();
                        $("#correctModal").modal('hide');
                    })
            
                }
                else
                {
                    //Try again shows up allowing user to find correct answer
                    $("#wrongModal").modal('show');
                }
            })
        }    
    }
    else
    {
        showEnd();
    }


}

$("#nextBtn").on("click",function()
{
    $("#answerBtn").empty();
    
    showNextQuestion();    
    
})

function showEnd()
{
    $("#Qcontainer").addClass("hide");
    $("#nextBtn").addClass("hide");
    $("#endBtn").removeClass("hide");

}

//Event Listener for start button
$("#startBtn").on("click", function()
{   
    startGame();
    showQuestion();
    
})






//Set the questions for the quiz    
var questions = [
	{
	  question: 'What are the symptoms for COVID19?',
	  answers: [
		{ text: 'Coughing', correct: true },
		{ text: 'Sneezing', correct: false },
        { text: 'Diarrhea', correct: false },
        { text: 'Fatigue', correct: true}
	  ]
    },
    {
        question: 'What activities can you do during the COVID-19 outbreak?',
        answers: [
          { text: 'Sunbathing at Bondi Beach', correct: false },
          { text: 'Travelling to Japan for Cherry Blossom Season', correct: false },
          { text: 'Reading a book at home', correct: true },
          { text: 'Hosting a party at your place with 50+ people', correct: false}
        ]
    },
    {
        question: 'What is an acceptable social distancing length?',
        answers:[
            { text: 'At arms length', correct: false},
            { text: 'Shoulder to shoulder', correct: false},
            { text: '2 meters apart', correct: false},
            { text: '1.5 meters apart', correct: true}
        ]

    },
    {
        question: 'Which disease is from the same strain/family as COVID-19?',
        answers:[
            { text: 'Middle Eastern Respiratory Syndrome (MERS)', correct: true},
            { text: 'Ebola Virus Disease (EVD)', correct: false},
            { text: 'Severe Acute Respiratory Syndrome (SARS)', correct: true},
            { text: 'H1N1 Swine Flu', correct: false}
        ]
    },
    {   
        question: 'Which country was COVID-19 thought to originate from?',
        answers:[
            { text: 'China', correct: true},
            { text: 'Italy', correct: false},
            { text: 'South Korea', correct: false},
            { text: 'USA', correct: false}
        ]
   },
   {
        question: 'World Health Organization (WHO) has classified COVID-19 as a/an ____________?',
        answers:[
            { text: 'Epidemic', correct: false},
            { text: 'Pandemic', correct: true},
            { text: 'Endemic', correct: false}
        ]
   },
   {
        question: 'If you have come back from overseas, how long should you be isolated for?',
        answers:[
            { text: '14 mins', correct: false},
            { text: '14 hours', correct: false},
            { text: '14 days', correct: true},
            { text: 'Not required if you\'re rich and live in the Eastern Suburbs', correct: false}
        ]
   },
   {
        question: 'What precautions can I take to protect myself and my family?',
        answers: [
            { text: 'Washing hands with hot soapy water after going outside', correct: true},
            { text: 'Panic buying toilet paper', correct: false},
            { text: 'Blaming the chinese and calling it the Chinese Virus', correct: false},
            { text: 'Wearing a facemask when you go outside', correct: true}
        ]

   }
]
	
