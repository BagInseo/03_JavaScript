//화면에 존재하는 key 모두 얻어오기

const keys=document.querySelectorAll(".key");



// 특정 요소 X
// 문서(화면 전체)에서 키가 눌러지는 것을 감지했을 때
document.addEventListener("keydown", function(e){
   
    let idx; //인덱스 값을 저장할 변수

    // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
    // 문자열.toUpperCase() : 영어를 모두 대문자로 변경

    switch(e.key.toLowerCase()){
        case 'q' : idx=0; break;
        case 'w' : idx=1; break;
        case 'e' : idx=2; break;
        case 'r' : idx=3; break;
        default : return;
    }

    keys[idx].style.backgroundColor="#ddd92a"

    if(document.addEventListener("keyup",function(){
        keys[idx].style.backgroundColor="";
    }));
    
    console.log(e.key);
})

