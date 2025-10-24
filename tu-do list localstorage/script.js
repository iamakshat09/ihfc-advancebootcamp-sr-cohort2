const btn=document.querySelector("#btn")
const btn1=document.querySelector("#btn1")
const list=document.querySelector("#list")

btn.addEventListener("click",function(){
    let input=document.querySelector("#data").value;
    let li=document.createElement("li")
    li.textContent=input;
    list.appendChild(li)
    document.querySelector("#data").value=""
    saveData();
})

btn1.addEventListener("click",function(){
    localStorage.removeItem("data")
})

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showData(){
    list.innerHTML=localStorage.getItem("data")
}

showData();
