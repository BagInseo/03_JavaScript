const display=document.querySelector("#display");
const list=document.querySelectorAll("#display > span");
const recordContainer=document.querySelector("#recordContainer");
const startBtn=document.querySelector("#startBtn");
const recordBtn=document.querySelector("#recordBtn");
const resetBtn=document.querySelector("#resetBtn");



let count=0; //1/100초마다 1씩 증가한 값을 저장할 변수
//1/100초 자리 : count%100
//1초 자리: count/100%60
//분 자리 : count/100/60

let currInterval; //인터벌 저장 변수

/* if(count==0){
    recordBtn.disabled=true;
}
else{recordBtn.disabled=false};
 */

/* start 버튼 클릭 시 10ms 마다 display(시간)을 증가 */
startBtn.addEventListener("click",(e)=>{

    //클릭한 버튼의 작성된 내용이 "PAUSE"인 경우(일시정지)
    if(e.target.textContent=="PAUSE") {
        e.target.textContent="START";
        window.clearInterval(currInterval);
        return;
    }

    //클릭한 버튼의 작성된 내용이 "START인 경우"
    currInterval=window.setInterval(()=>{

        count++; //count 1증가
        output(); //화면에 시간 출력
        //document.querySelectorAll("#display > span")[2].innerText=count;
        
    },10);//10ms

    e.target.textContent="PAUSE";

    


});

/* 시계 출력 함수 */
function output(){
    
    let minute = Math.floor( count / 100 / 60 );
    let second=Math.floor(count / 100 % 60);
    let ms=count % 100;

    minute=attachZero(minute);
    second=attachZero(second);
    ms=attachZero(ms);

    // console.log(minute, second, ms);

    // minute의 값과 화면에 출력되 분이 다를 경우
    if(list[0].innerText != minute) list[0].innerText=minute;

    // second의 값과 화면에 출력되 초가 다를 경우
    if(list[1].innerText != second) list[1].innerText=second;
    
    list[2].innerText=ms;



};

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num){

    if(num<10){ //한 자리 숫자인 경우
        return "0" + num;
    }

    return "" + num;
};



//-------------------------------------------------------------------------------
/* RESET 버튼이 클릭 되었을 때 */

resetBtn.addEventListener("click", () => {

    //currInterval 제거
    window.clearInterval(currInterval);

    //count, 출력된 시간 모두 0으로
    count=0;
    output();

   //다시 START버튼의 내용을 START로 변경
   startBtn.textContent="START";

   // #recordContainer의 내용을 모두 삭제
   recordContainer.innerHTML="";

});



/* 요소.textContent와 요소.innerText */
//textContent를 이용해 요소에 작성된 내용 얻어오기
// -> HTML 파일에 작성된 내용 형태 (단, 태그 뺴고) 그대로 얻어옴
//(띄어쓰기, 엔터 모두 포함)

//innerText를 이용해 요소에 작성된 내용 얻어어기
// 브라우저 화면에 보이는 형태를 (단, 태그 뺴고) 얻어옴




//---------------------------------------------------------------
/* RECORD 버튼이 클릭 되었을 때 */

recordBtn.addEventListener("click",()=>{
    const li=document.createElement("li");
    li.textContent=display.innerText;
    recordContainer.prepend(li);

    console.log(li);

})
