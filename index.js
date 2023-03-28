const n1 = Math.ceil(Math.random() * 10);
const n2 = Math.ceil(Math.random() * 10);

const queE1 = document.getElementById("question").innerText = `What is ${n1} Multiplied by ${n2} ?`;

const inputEl = document.getElementById("input");

const correctAns = n1 * n2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

const formEl = document.getElementById("form").addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
} 

const scoreEl = document.getElementById("score").innerText = `score : ${score}`;



