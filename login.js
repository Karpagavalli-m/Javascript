

let form1=document.querySelector("#form1")
let loginemail=document.getElementById("useremail")
let loginpassword=document.getElementById("password")
let loginerrormessage=document.getElementById("errormessage")

let arr2=[]
let loggedinuser;

window.onload=()=>{
arr2=JSON.parse(localStorage.getItem("Userdetails")) || []

loginemail.value=""
}




form1.addEventListener("submit",(e)=>{

    e.preventDefault();
    loginValidation();

})

function loginValidation()
{
  
   
    let loginemailvalue=loginemail.value.toLowerCase().trim();
    let loginpasswordvalue=loginpassword.value.trim();
   
    if(arr2.length!=0)
    {
    for(let obj of arr2)
    {
        
        if(obj.email===loginemailvalue&&obj.password===loginpasswordvalue){
            loginerrormessage.innerHTML=""
            alert("Login successful");
            localStorage.setItem("loggedinuser",JSON.stringify(obj.email))
            loginemail.value=""
            window.location.href="todo.html";

        }
        else{
           loginerrormessage.innerHTML="Invalid Username or password"
        }
    }
}
    else
    loginerrormessage.innerHTML="Invalid Username or password"
    
}

