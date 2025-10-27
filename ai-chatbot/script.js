const content=document.querySelector("#content");
const btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    let prompt=document.querySelector("#prompt").value;
    console.log(prompt);
    getdata(prompt);
})

async function getdata(prompt) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'tngtech/deepseek-r1t2-chimera:free',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        }),
    });
    const data=await res.json();
    console.log(data);
    console.log(data.choices[0].message.content)
    content.textContent=data.choices[0].message.content;
}
