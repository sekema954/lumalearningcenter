//menubar animation
const menuBar = document.querySelector(".menuBar");
menuBar.addEventListener("click", () =>{
    const dropdownDiv = document.getElementById("dropdown-menu");
    menuBar.classList.toggle("change");
    dropdownDiv.classList.toggle("showDropdown");
    dropdownDiv.classList.toggle("show-dropdown");
})


//auto type effect home screen
const div = document.querySelector(".auto-type");
const text = "Luma Learning Center";

function typingEffect(element, text, i=0){
   if(i===0){
    element.textContent = "";
   } 

   element.textContent += text[i];

   if(i===text.length -1) {
    return;
   }


   setTimeout(() => typingEffect(element, text, i+1), 50);
}

typingEffect(div, text);


//show more content on read more click

const btn1 = document.querySelector(".btn-1");

btn1.addEventListener("click", () => {
    const content1 = document.querySelector(".content1");
    content1.classList.toggle("showContent");
})

const btn2 = document.querySelector(".btn-2");

btn2.addEventListener("click", () => {
    const content2 = document.querySelector(".content2");
    content2.classList.toggle("showContent");
})


const btn3 = document.querySelector(".btn-3");

btn3.addEventListener("click", () => {
    const content3 = document.querySelector(".content3");
    content3.classList.toggle("showContent");
})


const btn4 = document.querySelector(".btn-4");

btn4.addEventListener("click", () => {
    const content4 = document.querySelector(".content4");
    content4.classList.toggle("showContent");
})











//review section...slider

let currentReviewIndex = 1;
const totalReviews = 3;

function showNextReview() {
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'none';
    currentReviewIndex = (currentReviewIndex % totalReviews) + 1;
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'block';
}

function showPrevReview() {
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'none';
    currentReviewIndex = (currentReviewIndex - 2 + totalReviews) % totalReviews + 1;
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'block';
}

