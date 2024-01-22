/* setTimeout(함수, 지연시간(ms)) */

const btn1=document.querySelector('#btn1');

btn1.addEventListener("click", () => {

    window.setTimeout(()=>{
        console.log("3초 후에 출력된 문자열");
    },3000); //3초 후에 수행

    window.setTimeout(()=>{
        console.log("1초 후에 출력된 문자열");
    },1000); //1초 후에 수행

    window.setTimeout(()=>{
        console.log("바로 출력된 문자열");
    },0); //1초 후에 수행

});

const btn2=document.querySelector("#btn2");
const box2=document.querySelector("#box2");


btn2.addEventListener("click",(e)=>{

    /*     [window .]setInterval(함수, 지연시간(ms)) */
    window.setInterval(()=>{
        const span=document.querySelector("#box2 > span");
        span.innerText=Number(span.innerText)+1;
    }, 1000);

    //클릭된 버튼을 비활성화 
    e.target.disabled=true;

});


/* clearInterval */
const target3=document.querySelector("#target3");
const start3=document.querySelector("#start3");
const stop3=document.querySelector("#stop3");

let currInterval;

start3.addEventListener("click", (e)=>{

    currInterval= setInterval(()=>{
        target3.innerText=Number(target3.innerText)+1;
    },100);

    e.target.disabled=true;

});


//멈춤 버튼 클릭 시
stop3.addEventListener("click",()=>{

    //setInterval 제거
    window.clearInterval(currInterval);
    start3.disabled=false;

});

