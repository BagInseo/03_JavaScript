
/* break 확인 */
function check1(){

    //1~10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i=1; i<=10; i++){
        console.log("i : "+ i);
        if(i==5) break;
    }
}

/* 무한 반복하는 while문 멈추기 */
function check2(){
    let i=1;

    while(true){
        //true일 때 반복 수행하는 코드
        console.log("i : "+ i++);

        if(i>10) break; //10 초과 시 멈춤
    }
}

/* continue 확인하기 */
function check3(){
    /* 1~20까지 출력 단,3의 배수는 건너뛰기 */
    for(let i=1; i<=20; i++){

        if(i%3==0) continue; //3이 출력되기 전에 조건문을 통해 3의 배수를 확인해야 한다

        console.log("i : "+i);
        
    }
}


/* 1~30까지 1씩 증가하며 출력
    단, 홀수 또는 10의 배수는 건너뛰기 
 */
function check4(){
    for(let i=1; i<=30; i++ ){

        if(i%(2)==1 || i%10==0) continue;

        console.log("i : "+i);
    }

}

/* 2중 for문
    0~9까지 5줄 출력
    -각 줄에서 4의 배수 건너뛰기
    -3번째 줄 출력 후 멈추기
*/

function check5(){
  
    for(let row=1; row<=5; row++){

        let str="";

        for(let i=0; i<=9; i++){
            if(i !=0 && i%4==0) continue;
            str+=i;
        }       
        console.log(str);
        if(row==3) break; 

    }    
}


//-------------------------------------------------------------------

/* up/down Game */
function startGame(){
    
    //1~100사이 난수
    const randomNumber=Math.floor(Math.random()*100)+1;
    console.log(randomNumber);

    //숫자를 입력한 횟수(정답 시도 횟수)
    let count=0;

    //prompt에 작성되어질 문자열
    let str="1 ~ 100 사이 숫자를 입력해 주세요";

    while(true){//무한 반복

        //prompt를 이용해서 값 입력 받기
        // -> 확인: 입력한 값, 취소: null
        let input=prompt(str);

        if(input==null){
            alert("게임 포기")
            break;
        }

        input=Number(input);
        
        if(isNaN(input) || input=="")
        {
            alert("숫자룰 입력해 주세요");
            continue;
        }
       
        count++;

        if(input==randomNumber){
            alert(`정답!!(${input}) / COUNT: ${count}`);
            break;
        }

        if(input > randomNumber){
            str=`DOWN / COUNT: ${count}`;
        }

        else{
             str=`UP / COUNT: ${count}`;
            }
          
        }

        //취소를 누른 경우 -> "게임 포기" 알람을 띄운 뒤 반복 중지
        //확인을 누른 경우 -> 숫자로 변환
        //NaN (Not a Number) : "숫자가 아니다" 를 나타내느 값

        //input에는 입력하는 숫자 또는 NaN이 대입됨
        
        //NaN인 경우 다시 입력 받게 하기

        //정상 입력한 경우
        //정답 시도 횟수를 1 증가
        //입력한 값이 난수와 같다면 
        //"정답!! (입력한 값) / count : 정답 시도 횟수"
        //알림창 출력 후 반복 종료

        //입력한 값이 난수보다 큰/작은 경우
        //"[Up / Down] / count: 정답 시도 횟수"
        //문자열을 str에 대입 후 다음 반복으로 이동
    }
    
