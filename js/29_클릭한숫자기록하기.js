const numbers=document.querySelectorAll(".num");
const resetBtn=document.querySelector("#resetBtn");
const output=document.querySelector("#output");


number.forEach((element)=>{
    element.addEventListener("click",()=>{
        console.log(element.textContent);
       
        if(output.innerText.trim().length<10){
            output.innerText+=element.textContent;
            return;
        }
    });
});

/* for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click",()=>{
        console.log(numbers[i].textContent);

        if(output.innerText.trim().length<10){
            output.innerText+=numbers[i].textContent;
            return;
        }
        else{
            alert("10글자 까지만 입력하세요");
        }

    });
}; */

resetBtn.addEventListener("click",()=>{
    output.textContent="";
});



for(let item of numbers){

    item.addEventListener("click",e=>{

        console.log(e.target.textContent);

        if(output.textContent.length==10){
            alert(" 10글자 까지만 입력 가능");
            return;
        }
        output.textContent+=e.target.textContent;
    });

}