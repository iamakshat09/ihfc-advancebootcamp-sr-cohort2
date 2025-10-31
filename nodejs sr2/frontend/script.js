const content=document.querySelector("#content");

async function getdata(){
    const url="http://localhost:3000/";
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    content.textContent=data.status;
}

getdata();