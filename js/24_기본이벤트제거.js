/* a태그 기본 이벤트 제거 */
document.querySelector('#move').addEventListener("click",e=>{

    //e: 이벤트 객체

    // e.preventDefault() : 요소의 기본 이벤트 막기(제거)
    // prevent : 하지 못하게 막다
    // default : 기본, 기본값
    e.preventDefault();
});



/* form 기본 이벤트 제거 */

/* 방법1 :  e.preventDefault();사용  */
/* input 요소들이 하나라도 작성되지 않은 겨우 제출 못하게 막기 */

document.querySelector("#form").addEventListener("submit",e=>{

    const inputList=document.querySelectorAll("#form > input");

    for(let i=0; i<inputList.length; i++){

        //작성 안된 input이 있는 경우
        if(inputList[i].value.trim().length==0){
            e.preventDefault();
            alert("작성되지 않은 input이 있습니다");
            inputList[i].focus();
            return;
        };
    };
});

/* 방법2:  */


const onsubmitTest= () => {
    const radio=document.querySelector("[name='submitRadio']:checked");

    if(radio.value=="O") return true;

    if(radio==null) return false;

    return false;

};


/* 방법3 ) 일반 버튼 클릭 시 form 제출 / 막기 */

document.querySelector("#btn3").addEventListener("click", ()=>{
    const input=document.querySelector("#inputTest");
    if(input.value.trim().length>0){
        //값을 작성한 경우
        document.inputForm3.submit();
    }
});
