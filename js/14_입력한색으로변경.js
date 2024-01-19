
//요소를 한 번에 여러개 얻어오면 배열 형태로 저장된다!!
// -> 얻어온 요소를 사용하려면 배열의 index별 요소를 하나씩 꺼내서 
//    사용해야 한다!!!

// ex)boxList.style.colore="red"   => 글자색 변경 X
//    boxList[0].style.colore="red" => 글자색 변경 O

const boxList=document.querySelectorAll(".box"); //배열
const inputList=document.querySelectorAll(".input");


document.querySelector(".btn").addEventListener("click",function(){

    for(let idx=0; idx<boxList.length; idx++){
        boxList[idx].style.backgroundColor=inputList[idx].value;
        
        if(inputList[idx].value==""){
            alert(`${idx}번째 input란이 비어있음`);
        }
    }

    inputList[0].focus();
});

