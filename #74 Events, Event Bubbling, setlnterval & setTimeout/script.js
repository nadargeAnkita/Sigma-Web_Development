let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    // alert("I was clicked Yayy!!!")
    document.querySelector(".box").innerHTML = "<b> Yayy you are clicked </b> Enjoy your click!"
})


btn.addEventListener("dblclick", ()=>{
    alert("I was clicked Yayy!!!")
    document.querySelector(".box").innerHTML = "<b> Yayy you are clicked </b> Enjoy your click!"
})


btn.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click")
})


btn.addEventListener("keydown", (e)=>{
   console.log(e)
})

