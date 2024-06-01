let btnElement = document.createElement('button');
btnElement.textContent = "Change Heading";
btnElement.onclick = function(){
    console.log("click event triggred");
};
document.getElementById('myContainer').appendChild(btnElement);