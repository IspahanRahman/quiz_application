
const quizDB=[
    {
        question:"Q1:What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"Hyper Text Makeup Language",
        d:"Hypertext Markup Language",
        ands:"ans4"
    },

    {
        question:"Q2:What is the full form of CSS?",
        a:"Cascading Style Sheet",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ands:"ans1"
    },

    {
        question:"Q3:What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"Hypertext Transfer Protocol",
        ands:"ans4"
    },

    {
        question:"Q4:What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JorderShoes",
        ands:"ans3"
    },

    {
        question:"Q5:In which view Headers and Footers are visible?",
        a:"Normal View",
        b:"Page Layout View",
        c:"Print Layout View",
        d:"Draft View",
        ands:"ans3"

    },

    {
        question:"Q6:The process of removing unwanted part of an image is called?",
        a:"Hiding",
        b:"Bordering",
        c:"CroppingD",
        d:"Cutting",
        ands:"ans3"
    },
    {
        question:"Q7:To apply center alignment to a paragraph we can press?",
        a:"Ctrl + S",
        b:"Ctrl + C",
        c:"Ctrl + C + A",
        d:"Ctrl + E",
        ands:"ans4"
    },
    {
        question:"Q8:The space left between the margin and the start of a paragraph is called?",
        a:"Spacing",
        b:"Gutter",
        c:"Indentation",
        d:"Alignment",
        ands:"ans3"
    },
    {
        question:"Q9:Text-styling feature of MS word is?",
        a:"WordColor",
        b:"WordFont",
        c:"WordArt",
        d:"WordFill",
        ands:"ans3"
    },
    {
        question:"Q10:Which items are placed at the end of a document?",
        a:"Footer",
        b:"Foot Note",
        c:"End Note",
        d:"Header",
        ands:"ans3"
    },

    {
        question:"Q11:To change line height to 1.5 we use shortcut key :?",
        a:"Ctrl+1",
        b:"Ctrl + 2",
        c:"Ctrl + 3",
        d:"Ctrl + 5",
        ands:"ans4"
    },

    {
        question:"Q12:A number of letter that appears little above the normal text is called :?",
        a:"Superscript",
        b:"Subscript",
        c:"Supertext",
        d:"Toptext",
        ands:"ans1"
    },

    {
        question:"Q13:A number of letter that appears little below the normal text is called ?",
        a:"Superscript",
        b:"Subscript",
        c:"Supertext",
        d:"Toptext",
        ands:"ans2"
    },

    {
        question:"Q14:We can insert a page number at?",
        a:"Header",
        b:"Footer",
        c:"Both A and B",
        d:"None",
        ands:"ans3"
    },
    {
        question:"Q15:Which one can be used as watermark in a word document?",
        a:"Text",
        b:"Image",
        c:"Both A and B",
        d:"None",
        ands:"ans3"
    }


]

const question=document.querySelector('.question')
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const option4=document.querySelector('#option4')
const submit=document.querySelector('#submit')

const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore')
let questionCount=0
let score=0


const loadingQuestion=()=>{
    const questionList=quizDB[questionCount]
    question.innerText=questionList.question
    option1.innerText=questionList.a
    option2.innerText=questionList.b
    option3.innerText=questionList.c
    option4.innerText=questionList.d

}
loadingQuestion()

const getAnswer=()=>{
    let answer
    answers.forEach((currentElement)=>{
        if(currentElement.checked){
            answer=currentElement.id
        }
    })
    return answer
}

const uncheckedAll=()=>{
    answers.forEach((checkedElement)=>{
        checkedElement.checked=false
    })
}
submit.addEventListener('click',()=>{
    const check_answer=getAnswer()
    
    if(check_answer===quizDB[questionCount].ands){
        score++
    }
    uncheckedAll()
    questionCount++
    if(questionCount<quizDB.length){
        loadingQuestion()
    }
    else{
        showScore.innerHTML=`<h3>You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Question Again</button>`;
        showScore.classList.remove('scoreArea')
    }
    
})