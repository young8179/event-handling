const newButton = document.querySelector(".one")
function logClick(){
    console.log("Button Pressed");
}

newButton.addEventListener("click", logClick);

///----------------------------------------

function rightClick(event){
    event.preventDefault();
    console.log("You right click");


}

const newButton_2 = document.querySelector(".two")
function logClickPressed(){
    event.preventDefault();
    if(event.button === 0){
        console.log("You left clicked");
    }else if(event.button === 2){
        console.log("You middle click");
    }else if(event.button === 1){
        
        console.log("You right click");
}
}
newButton_2.addEventListener("click", logClickPressed);
newButton_2.addEventListener("contextmenu", rightClick)
///---------------------------------------------------------



window.addEventListener('resize', () => {
    console.log('You Change the size of the Window!')
});
