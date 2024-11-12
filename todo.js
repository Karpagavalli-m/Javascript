input=document.getElementById("input")
btn=document.getElementById("submit")
div=document.getElementById("todo")
let User=[]
let loggeduser;
let id;
window.onload = ()=>{
User=JSON.parse(localStorage.getItem("Userdetails")) || []
loggeduser=JSON.parse(localStorage.getItem("loggedinuser")) || ''


findUser();
}
function findUser()
{

for(let obj of User)
{
    console.log(obj)
    if(obj.email===loggeduser)
    {
        obj.todos.forEach(element => 
        displayItems(element));
        id=User.indexOf(obj)
        console.log(id)
    }
}
}
btn.addEventListener('click',addItems)

function addItems()
{
    let val=input.value
    if(input.value!==''){
    User[id].todos.push(input.value)
    localStorage.setItem("Userdetails",JSON.stringify(User))
    displayItems(val)
    input.value=''
    }
}

function displayItems(val)
{
    let p=document.createElement('p')
    p.innerText=val
    div.appendChild(p)
    p.addEventListener('click',()=>
    {
        let index=User[id].todos.indexOf(val)
        if(index>-1){
          User[id].todos.splice(index,1);
          localStorage.setItem("Userdetails",JSON.stringify(User))
          p.style.textDecoration="line-through"
        } })
    p.addEventListener("dblclick",()=>{
        div.removeChild(p)
    })

}