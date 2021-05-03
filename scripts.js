let countBtn = document.querySelector(".countBtn button");
let minusBtn = document.querySelector(".minusBtn button");
let countNum = document.querySelector(".countNum h1");

countBtn.addEventListener("click", countUp);

function countUp() {
    countNum.innerHTML ++;
}

minusBtn.addEventListener("click", countDown);

function countDown() {
    countNum.innerHTML --;
}