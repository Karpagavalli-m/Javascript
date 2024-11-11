input=document.getElementById("input")
btn=document.getElementById("submit")
div=document.getElementById("todo")
let todos=[]
window.onload = ()=>{
todos=JSON.parse(localStorage.getItem("todo"))|| []
todos.forEach(element => 
    displayItems(element));
}
btn.addEventListener('click',addItems)

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

function displayItems(val)
{
    let p=document.createElement('p')
    p.innerText=val
    div.appendChild(p)
    p.addEventListener('click',()=>
    {
        let index=todos.indexOf(val)
        if(index>-1){
          todos.splice(index,1);
          localStorage.setItem("todo",JSON.stringify(todos))
          p.style.textDecoration="line-through"
        } })
    p.addEventListener("dblclick",()=>{
        div.removeChild(p)
    })

}