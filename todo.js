let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("plz enter the task")
    }else{
        let newEle = document . createElement("ul");
        newEle.innerHTML =`${inputs.value}<span class="material-symbols-outlined">
        delete
        </span>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("span").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}