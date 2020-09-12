
const button = document.getElementById("button")
const list= document.getElementById("bag")
const input = document.getElementById("input")

let x = 0
function clickButton(){
    const list= document.getElementById("bag")
    const input = document.getElementById("input")
    if (input.value === '') {
        return
    }
    let newList = list.innerHTML;
    x ++;
    let id = `item-${x}`
    newList += `
    <li id="${id}">${input.value} <button onclick="remove('${id}')" id="rmButton" class="">Remove</button></li>
    `;
    
    list.innerHTML = newList;
    input.value = ''
    
   
}   
function remove(id){
    document.getElementById(id).remove()
}