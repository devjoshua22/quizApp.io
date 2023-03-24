const quizdata = [
    {
    question : "The equation X15062 => Y150 63 + -1 + energy, represents ?",
    A: "Alpha decay. ",
    B: "Beta-decay  " ,
    C: "Gamma decay ",
    D: "Photon emission  ",
    correct : "B",
    },
    {
    question : "The ice and steam points of a thermometer are 20mm and 100mm respectively. A temperature of 75 degree celsius corresponds to Y mm on the thermometer. What is Y?",
    A: "100 mm ",
    B: "0 mm " ,
    C: "80 mm",
    D: "50 mm  ",
    correct : "C",
    },
    {
    question : "When a yellow card is observed through a blue glass, the card would appear as? ",
    A: "Black ",
    B: "Green  " ,
    C: "Orange ",
    D: "White  ",
    correct : "A",
        },
    {
        question : "When two objects P and Q are supplied with the same quantity of heat, the temperature change in p is observed to be twice that of Q. The mass of P is half that of Q. The ratio of the specific heat of P to Q is",
        A: "1:2 ",
        B: "1:1  " ,
        C: "1:4 ",
        D: "1:7 ",
        correct : "B",
        },        
    {
         question : "When two objects P and Q are supAn object of mass 50g is suspended from the end of a spiral spring of force constant 0.5N/m, the body is set into simple harmonic motion with 0.3m displacement. The period of the motion is?  ",
        A: "1.00s",
        B: "1.99s" ,
        C: "3.00s",
        D: "2.5s",
        correct : "B",
    },
    {
       question:" The thrust due to hydrostatic pressure alone on the bottom of a fish tank which is 60cm x 40cm when the depth of water is 30cm is?",
        A: "8N",
        B: "12N" ,
        C: "720N",
        D: "24N",
        correct : "C",
   },    
   {
    question:"A long jumper leaves the ground at an angle of 20 degrees above the horizontal and at a speed of 11m/s. How far does it jump in the horizontal direction?",
     A: "0.38m",
     B: "7.49m" ,
     C: "8.45m",
     D: "0m",
     correct : "B",
},
{
    question:"A silver spoon and a wooden spoon are both at room temperature. The silver spoon is cooler to touch because silver _____.",
     A: "has a greater density",
     B: "can be polished" ,
     C: " is a better conductor of heat",
     D: "is a less absorbent material than wood",
     correct : "C",
},
//  {
//      question:`The following statements were made by some students describing what happened during the determination of the melting point of solids.
//      1. The temperature of the solid was constant until melting started
//      2. The temperature of the solid rose until melting started
//      3. During melting, the temperature was rising
//      4. During melting, the temperature was constant
//      5. The temperature continued to rise after all the solid had melted.
   
//     The temperature stopped rising after all the solid had melted. Which of the following gives correct statements in the right order? `,
//       A: "2, 4 and 5",
//       B: " 2, 3 and 6" ,
//       C: "1, 3 and 6 ",
//       D: "1, 3 and 5",
//       correct : "A",
//  },  
 {
    question:"A 1.5kg stone was thrown vertically upward with an initial velocity of 42m/s, What is the potential energy of the stone at the highest point reached. ",
     A: "3.15J ",
     B: "13.23J" ,
     C: "26.46J",
     D: "63.00J",
     correct : "A",
},     
{
    question:"In a nuclear plant, the final mass of the products is 6.32×10^-27kg, while the initial mass of the reactant is 6.30×10^-27kg, the energy released in the process is (speed of light in vacuum 3.0×10^8m/s, 1eV = 1.6×10^-19J) ",
     A: "11.25meV",
     B: "11.25 MJ" ,
     C: "12.25MJ",
     D: "12.25meV",
     correct : "A",
}, 
{
    question:"If 21g of alcohol of density 0.7gcm^-3 is mixed with 10g of water, what would be the density of the resulting mixture?",
     A: "780gcm^-3",
     B: "0.78gcm^-3" ,
     C: "30gcm^-3",
     D: "10gcm^-3",
     correct : "B",
}, 
{
    question:"Two masses 50g and 70g are suspended from the respective ends of a light metre rule, the centre of gravity of the system is ______?",
     A: "50.0cm",
     B: "52.3cm" ,
     C: "70.2cm",
     D: "80.4cm",
     correct : "B",
}, 
{
    question:" A transformer which can produce 10V from a 240V a.c supply has an efficiency of 60%. If the current in the secondary winding coil is 15A, the current in the primary coil is ______?",
     A: "15.0 A",
     B: "1.04 A" ,
     C: "16.04 A",
     D: "13.96 A",
     correct : "B",
}, 
{
    question:"The acceleration due to gravity _______?",
     A: "increases with increasing altitude",
     B: "decreases with increasing altitude" ,
     C: "increases with an increase in the square of the altitude",
     D: "is not affected by the altitude",
     correct : "B",
}, 
{
    question:"A nail is pulled from a wall with a string tied to the nail. If the string is inclined at an angle of 30 degrees to the wall and the tension in the string is 50N, the effective force used in pulling the nail is:",
     A: "25N",
     B: "25 SQRT(3)" ,
     C: "50 N",
     D: "50 SQRT(3)",
     correct : "A",
}, 
{
    question:"The electromagnetic waves that are sensitive to temperature changes are _____?",
     A: "Ultra-violet rays",
     B: "Gamma-rays" ,
     C: "Infra-red rays",
     D: "X-rays",
     correct : "C",
}, 
{
    question:" A boy of mass m, suspended from a spring, is put into simple harmonic motion. If the motion has amplitude A and the spring constant k, the maximum potential energy of the mass is",
     A: "KA",
     B: "0.5 kA^2" ,
     C: "MkA",
     D: "kA^2/m",
     correct : "B ",
}, 
// {
//     question:"",
//      A: "",
//      B: "" ,
//      C: "",
//      D: "",
//      correct : "",
// }, 
];
let scores = 0
let point= 0
let currentQuestion = document.getElementById("questions")
const answerEls = document.querySelectorAll(".answer")
const aText = document.getElementById("A-text")
const bText = document.getElementById("B-text")
const cText = document.getElementById("C-text")
const dText = document.getElementById("D-text")
const submitBtn = document.getElementById("submit")
const hintEl = document.getElementById("hint")
let currentQuiz = 0
const quiz = document.getElementById("quiz")
// alert(`if you are stuck .Click the point button to get correct answer
//          getting hints costs 5points
//          answering correct question gives you 3points`)
loadQuestions()
function hint(){
    if(point >= 5) { 
        alert("this will cost you 5 points")
        alert(`The correct answer is ${quizdata[currentQuiz].correct}`)
       point = point- 5
     } else{
        alert("You are low on points! answer more question correctly to gain points")
     }
}
 function loadQuestions (){
    deselectAnswer()
    const currentQuizdata = quizdata[currentQuiz]
    currentQuestion.innerText = currentQuizdata.question
    aText.innerText = currentQuizdata.A
    bText.innerText = currentQuizdata.B
    cText.innerText = currentQuizdata.C
    dText.innerText = currentQuizdata.D
    hintEl.innerText = point+'Points' 
 }
  function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
 }
 function getSelected(){
     let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
           answer = answerEl.id
           
        }
    })
     return answer
 }
function next() {
     answer = getSelected()
    if (answer) {
        if (answer === quizdata[currentQuiz].correct ) {
            scores++
           point = point + 3
        }
        currentQuiz++ 
        if(currentQuiz < quizdata.length){
            loadQuestions()
            perc = Math.floor(scores/quizdata.length*100) 
            console.log(scores)
        } else{
            quiz.innerHTML = 
            `<p> You answered ${scores}/${quizdata.length} questions correctly </p>
            <p>Your Accuracy was ${Math.floor(scores/quizdata.length*100)}% !</p>
            <button onclick="location.reload()"> Try Again? </button>`
        }
    }
}
















