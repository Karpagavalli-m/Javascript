let form2=document.querySelector("#form2")
let username=document.getElementById("newusername")
let email=document.getElementById("newemail")
let password=document.getElementById("newpassword")
let confirmpassword=document.getElementById("cnfrmpassword")
let submit=document.getElementsByClassName("btn")
let arr=[];

window.onload= () => {
  arr=JSON.parse(localStorage.getItem("Userdetails")) || []
}


form2.addEventListener("submit",(e)=>
{
       
    e.preventDefault();
    let result=formValidation();
   
    if(result){
   
   alert("New user is registered successfully")
   window.location.href="index.html";
    }
    })



function formValidation()
{
    let usernameval=username.value.trim();
    let emailval=email.value.toLowerCase().trim();
    let passwordval=password.value.trim();
    let confirmpasswordval=confirmpassword.value.trim();
    let success=true;
    let obj={};
    const emailformat=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(usernameval!==""){
        
        successInput(username);
        success=true;
    }
    else
    {
    errormessage("Enter the User name",username)
    success=false;
    return false;
    }
    if(emailval==="")
        {
            errormessage("Enter the email address",email)
            success=false;
            return false;
        }
    else if(emailformat.test(emailval))
    {
       
        for(let obj of arr){
            if(obj.email===emailval)
            {
            errormessage("Email already exists",email)
            success=false;
            return false;
            }
        }
        successInput(email);
        success=true;
    }
    else
    { 
        
        errormessage("Invalid Email address",email)
        success=false;
        return false;
        
    }
    if(passwordval.length<6){
        success=false;
        errormessage("Enter password more than 6 characters",password)
        return false;
    }
    else if(passwordval.length>=6){
        successInput(password);
       
        success=true;
    }
    else{
        success=false;
        errormessage("Enter the password",password)
        return false;
    } 

    if(passwordval===confirmpasswordval && confirmpasswordval!=="")
    {
       
        success=true;
        successInput(confirmpassword);
    }
    else if(confirmpasswordval==="")
    {
        success=false;
        errormessage("Enter the confirm Password",confirmpassword)
        return false;
    }
    else
    {
    success=false;
    errormessage("Password does not match",confirmpassword)
    return false;
}

if(success){
obj.username=usernameval;
obj.email=emailval;
obj.password=passwordval;
obj.todos=[]



arr.push(obj)
 
 localStorage.setItem("Userdetails",JSON.stringify(arr))
 username.value=email.value=password.value=confirmpassword.value=""
  email.value="";
}
 return true;
}

function addItems()
{
    let val=input.value
    if(input.value!==''){
    todos.push(input.value)
    localStorage.setItem("todo",JSON.stringify(todos))
    displayItems(val)
    input.value=''
    }
}

function errormessage(message,element)
{
    let inputGroup= element.parentElement;
    let error=inputGroup.querySelector('.error')
    error.innerHTML=message;
    
}

function successInput(element)
{
    let inputGroup= element.parentElement;
    let error=inputGroup.querySelector('.error')
    error.innerHTML="";
    
}
