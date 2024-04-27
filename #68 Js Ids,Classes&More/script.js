console.log("Nadarge");

// let Ankita=document.getElementsByClassName("box")
// console.log(Ankita)

// Ankita[2].style.backgroundColor="skyblue";

// document.getElementById("redbox").style.backgroundColor="skyblue"

// document.querySelector(".box").style.backgroundColor="green";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="skyblue";
})