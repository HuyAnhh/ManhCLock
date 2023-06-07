let timeEle = document.querySelectorAll(".times")

let Day = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
]

setInterval(() => {
    let date = new Date;
    timeEle[0].innerHTML = Day[date.getDay()];
    timeEle[1].innerHTML = date.getDate();
    timeEle[2].innerHTML = date.getMonth() + 1;
    timeEle[3].innerHTML = date.getFullYear();
    timeEle[4].innerHTML = date.getHours();
    timeEle[5].innerHTML = date.getMinutes();
    timeEle[6].innerHTML = date.getSeconds();
}, 1000)

let handleChangeBg = document.querySelector(".btnChangeBg")
let BgEle = document.querySelector(".container--Manhclock")

handleChangeBg.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 11);
    BgEle.style.backgroundImage = 'url(Manh'+random+'.jpg)'
})

let i = 0;
let txt = "Gọi em là ánh nến. Biết là lửa nhưng anh vẫn nguyện làm con thiêu thân";
let speed = 100;

const handleTyping = document.querySelector(".btnLove")
const loveEle = document.querySelector(".loveImg")

handleTyping.addEventListener("click", function typeWriter() {
    BgEle.style.display = "none";
    handleChangeBg.style.display = "none";
    handleTyping.style.display = "none";
    setTimeout(() => {
        loveEle.style.display = "inline-block"
    }, 8000);
    if (i < txt.length) {
        document.querySelector(".love").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } 
    
})
