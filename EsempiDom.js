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
    
    btn.addEventListener("click", function(){
        p1.classList.remove("myClass");
    })
};

// window.addEventListener("load", handleClick);

document.addEventListener("DOMContentLoaded", handleClick);

