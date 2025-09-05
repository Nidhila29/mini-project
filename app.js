//To Do part
let inp = document.querySelector("input");
let btn = document.querySelector(".todoBtn");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
   

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
    
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();


    }

});

//Pomodoro

const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let time = 25*60;
let interval;

function updateTimer(seconds){
    const min = Math.floor(time/60);
    const sec = time%60;
    timerDisplay.textContent = `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
}

function startTime(){
    if(interval) return;
    interval = setInterval(()=>{
        if(time<=0){
            clearInterval(interval);
            alert("Time's UP!");
            return;
        }
        time--;
        updateTimer();
    },1000);
}

function stopTime(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    clearInterval(interval);
    interval = null;
    time = 25*60;
    updateTimer();
}

startBtn.addEventListener("click",startTime);
pauseBtn.addEventListener("click",stopTime);
resetBtn.addEventListener("click",resetTimer);

updateTimer();


//Random Quotes

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

function getQuote(){
    axios.get("http://api.quotable.io/random")
     .then(response =>{
        quote.innerText = response.data.content;
        author.innerText = (" --",response.data.author);
        }).catch(e => console.log("error",e));
}

getQuote();
