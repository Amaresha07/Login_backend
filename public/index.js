
const form=document.querySelector("form");

async function sendLoginDetailsToServer(name,password) {
    const response=await fetch("/login",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({user_name:name,password:password})
    })
    
    if(response.status == 200 ) {
        window.location.href="/home.html";
    }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.querySelector("#form_name").value;
    const pass=document.querySelector("#form_pass").value;
    sendLoginDetailsToServer(name,pass);
})