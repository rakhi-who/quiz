const ques= [
    {question : "what is color the of the sky?",
    answer:  [{text:"red" , correct: false},
              {text:"black" , correct: false},
              {text:"yellow" , correct: false},
              {text:"blue" , correct: true }]
 
    },
    {question : " what is the name of biggest planet inthe soler system?",
    answer:  [{text:"jupitar" , correct: true},
              {text:"earth" , correct: false},
              {text:"mercury" , correct: false},
              {text:"pluto" , correct: false }]

    },
    {question : "which one is first equation from equation's of motion?",
    answer:  [{text:"s\\t" , correct: false},
              {text:"v2=u2+2as" , correct: false},
              {text:"Q=na" , correct: false},
              {text:"E=mc2" , correct: true }]

    },
    {question : "which one of bellow is capital of india?",
    answer:  [{text:"delhi" , correct: false},
              {text:"varanasi" , correct: false},
              {text:"mumbai" , correct: false},
              {text:"nepal" , correct: true }]

    },
];
const questions = document.querySelector(".question");
const answer = document.querySelector(".ans");
const next = document.querySelector(".nex");

let currentQuesInd = 0;
let result = 0;

 function Quiz(){
    currentQuesInd = 0;
    result = 0;
    next = next.setAttribute('class', "next");
    ShowQuestion();

 }
  function ShowQuestion(){
    let currentQues = ques[currentQuesInd];
    let questionNo = currentQuesInd + 1;
    questions.innerText = questionNo + "."+ currentQues.question;
console.log(currentQues.question);
    currentQues.answer.forEach((index) =>{
     const button = document.createElement("button");
     button.innerText = index.text;
    
     answer.appendChild(button);
    })
  }
  Quiz();

  document.querySelector(".answer").addEventListener(e=>{
    ShowQuestion();
  })
  console.log("hello");