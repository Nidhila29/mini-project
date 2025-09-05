//side bar
const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");

openBtn.addEventListener("click",function(){

  sidebar.classList.add("show");
  openBtn.classList.add("hide");
  
  

});

closeBtn.addEventListener("click",function(){
  sidebar.classList.remove("show");
  openBtn.classList.remove("hide");
  
});

//dark mode

const darkBtn = document.querySelector(".fa-moon");
const all = document.querySelectorAll(".main,.sidebar,.card1,.card2,button");

darkBtn.addEventListener("click",function(){
  all.forEach(element => element.classList.toggle("dark"));

});













