const boxs=document.querySelectorAll(".box");
const inputs=document.querySelectorAll(".input");
const btn=document.querySelector(".btn");


btn.addEventListener("click",function(){

    for(let idx=0; idx<boxs.length; idx++){

        boxs[idx].style.backgroundColor=inputs[idx].value;

        if(inputs[idx].value==""){
            alert(`${idx}번째 input란이 비어있음`);
        }
    }

    inputs[0].focus();
});

