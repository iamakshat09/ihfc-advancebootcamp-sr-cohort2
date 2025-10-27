const content=document.querySelector("#content")

async function getdata(){
    url="http://localhost:3000/";
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    content.textContent=data.data;
}

getdata();