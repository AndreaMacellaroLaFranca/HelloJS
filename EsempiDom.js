function handleClick(){

    const btn = document.getElementById("b1");
    console.log(btn);
    
    btn.onclick = function(){
        console.log("You clicked this button")
    };
    //OVERRIDES FIRST ONCLICK    
    btn.onclick = function(){
        console.log("Nice! you just clicked")
    };
    //REGISTERS MORE ACTIONS
    btn.addEventListener("click", function(){
        console.log("add event listener n1")
    });
    btn.addEventListener("click", function(){
        console.log("add event listener n2")
    });
    //JQUERY SELECTOR
    const p1 = document.querySelector("#p1");
    p1.textContent = "Buonasera JavaScript";
    p1.classList.add("myClass");
    // p1.style.color = "blue";
    // p1.style.backgroundColor = "orange";
    
    btn.addEventListener("click", function () {
        p1.classList.remove("myClass");
    });

    //CREATING A PARAGRAPH
    const newPar = document.createElement("p");
    newPar.textContent = "-Paragraph created by JS-"
    //CREATING A DIV
    const newDiv = document.createElement("div");

    newDiv.appendChild(newPar); //p inside div as last element
    document.body.appendChild(newDiv); //Inserting div at the end of the body

    const input = document.querySelector("#taskInput");
    const btnAdd = document.querySelector("#toDoList button");
    btnAdd.addEventListener("click", function (e) {
        const newLi = document.createElement("li")
        const text = input.value;
        newLi.textContent = text;
        newLi.addEventListener("click",()=>{
            this.remove();
        });
        const ul = document.querySelector("#toDoList div ul");
        ul.appendChild(newLi);
        input.value = "";
        btnAdd.disabled = true;
    });
    
    document.querySelector("#taskInput").addEventListener("input", function () {
        if (input.value.trim().length > 0) {
            btnAdd.disabled = false;               
        } else {
            btnAdd.disabled = true;
        }
    });
    
};




// window.addEventListener("load", handleClick);
document.addEventListener("DOMContentLoaded", handleClick);

