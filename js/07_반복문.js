function check1(){
    // [작성법]
    //for(초기식 ; 조건식 ; 증감식){
      //  조건식이 true인 경우 반복 수행할 코드;
   // 
    let result="";  //빈 문자열
    for(let num=1;num<=5 ;num++){
        result+=num; //복합 대입 연산자
    }
    console.log("result : " + result);
}

function check2(){
    // 1부터 10까지 출력하기
    for(let num=1; num<=10; num++){
        console.log("num : "+ num);
    }
    
}

function check3(){
    for(let num=1; num<=20; num++){
        console.log("num : " + num);
    }
}

function check4(){
    for(let num=5; num<=15; num++){
        console.log("num : " + num);
    }
}

function check5(){
    for(let num=1; num<=30; num+=2){
        console.log("num : " + num);
    }
}

function check6(){
    let sum=0; //0은 더해도 아무런 영향이 없기 때문에
    for(let num=1; num<=10; num++){
        sum+=num; //sum에 num 값(1~10) 누적
    }
    console.log(sum);//55
}

function sumFn(){
    //input 에 작성된 값을 얻어와 저장
    const start=Number(document.getElementById("inputNumber1-1").value);
    const end=Number(document.getElementById("inputNumber1-2").value);

    //결과를 출력하기 위한 요소(span#result1)인 요소 얻어와 저장
    const result1=document.getElementById("result1")
    
    let sum=0;

    //start 부터 end 까지 1씩 증가하는 for문
    for(let num= start; num<=end; num++ ){
        sum+=num;
        console.log(sum);
    }
    result1.innerText=sum;
}


function excuteFn2(){
    const start=Number(document.getElementById("inputNumber2-1").value);
    const end=Number(document.getElementById("inputNumber2-2").value);
    const val=Number(document.getElementById("inputNumber2-3").value); //증가값

    const ul=document.getElementById("result2");

    ul.innerHTML=""; //이전 ul에 작성된 내용을 모두 삭제한다. 

    for(let num=start; num<=end; num+=val){
        ul.innerHTML+=`<li>${num}</li>`;
    }

}
//요소.innerText="문자열";
//-> 요소의 내용으로 문자열을 대입해라
//  (HTML 태그를 해서하지 않고 그대로 보여줌)

// 요소.innerHTML = "<h2>문자열</h2>"
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그를 해석해서 화면에 출력)

function check7(){
    //num(곱해지는 수)이 1부터 9까지 1씩 증가
    for(let num=1; num<=9; num++){
        console.log(`2 X ${num} = ${2*num}`);
    }
}

function executeFn(){
    const input3=Number(document.getElementById("input3").value);
    const result3=document.getElementById("result3");

    result3.innerHTML="";

    //!(input3>=2 && input3<=9)
    //  input3<2 || input3>9
    if(input3<2 || input3>9)
    {
        alert("2~9 사이만 입력해 주세요")
        return; //함수를 종료하고 호출한 곳으로 돌아감
    } 
        for(let num=1; num<=9; num++){
            result3.innerHTML+=`<li>${input3} X ${num} = ${input3*num}</li>`
        }
}

function executeFn4(){
    const input=Number(document.getElementById("input4").value);
    const output=document.getElementById("output4").value;
    const result=document.getElementById("result4");

    let str=""; //출력할 문자열을 저장할 변수

    for(let x=1; x<=50; x++){

        if(x%input==0){//x가 input의 배수인 경우

            //str에 x 대신 output을 대입
            str+=output+" ";
        }
        else{
            str+=x+" ";
        }


        //10의 배수마다 str에 <br>태그 추가
        if(x%10==0){
            str += "<br>";
        }
    }
    result.innerHTML=str;
}

function check8(){

    for(let y=1; y<=4; y++){
        //4바튀 반복하는 for문
        let str="";

         for(let x=1; x<=5; x++){
              str+=x;
        }
         console.log(str);
         console.log("");

  }
    
}

function check9(){

    for(let y=1; y<=5; y++){
        let str="";

        for(let x=1; x<=y; x++){
            str+=x;
        } 
        console.log(str);
    }
        
}


//감소하는 for문
function check10(){
    //5  3  1  -1  -3  -5   로 감소하면서 출력
    for(let num=5; num>=-5; num-=2){
        console.log(num);
    }
}


/*      12345
        1234
        123
        12
        1 */

function check11(){
    for(let row=5; row>=1; row--){

        let str="";
        for(let col=1; col<=row; col++){
            str+=col;
        }
        console.log(str);
    }
       
}


//if, for문 내에 코드가 한 줄만 있다면 {} 생략 가능
function check12(){
   for(let y=1; y<=3; y++){

        str="";
        for(let x=1; x<=y; x++){
            str+=x;
        }
        console.log(str);
    }

    for(let y=4; y>=1; y--){
        str="";
        for(x=1; x<=y; x++){
            str+=x;
        }
        console.log(str);
    } 

    console.log("-----------------------------------------------------");

    //한 번에 7줄 
    for(let row=1; row<=7;row++){

        let end=0;
        if(row <=4) end=row;
        else        end=7-row+1;

        let str="";
        for(let col=1; col<=end; col++){
            str+=col;
        }
        console.log(str);
    }
}


// 카운트를 이용해서 출력하기
// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12

function check13(){

    let count=1; //카운트를(세기) 위한 변수 선언

    for(let row=1; row<=3; row++){

        let str="";
        for(let col=1; col<=4; col++){
            str+=count+" ";
            count++; //count 값을 1 증가
        }
        console.log(str);
    }     
        
}

function check14(){
    const input=Number(document.getElementById("input14").value); //입력된 배수
    const result=document.getElementById("result14"); //결과 출력을 위한 span

    let count=0;

    for(let num=1; num<=100; num++){
        if(num%input==0){//num이 input의 배수가 맞는 경우
            count++; //count 1 증가
        }
    }
   result.innerText=`${input}의 배수 : ${count} 개`;
}



function check15(){

    let count=0;

    for(let row=1; row<=7; row++){
        if(row<=4)count++;
        else      count--;
    
        let str="";
        for(let col=1; col<=count; col++){
            str+=col;
        }
        console.log(str);
    }
}


//while문 확인 
 function check16(){
    let val;  //변수를 선언만 하기(undefined)

    //취소를 누르기 전 까지 반복
    // == 취소를 누르면 반복하지 않겠다. 
    while(val !== null)
    {
        // 동일 비교 연산자
        // !== -> 값, 자료형이 모두 다른 경우
        // === -> 값, 자료형이 모두 같은 경우

        val=prompt("입력 후 확인"); //변수에 prompt 값 대입
        //확인 ->입력한 값
        //취소 ->null

        console.log(val);    
    }
 }


 /* 메뉴 주문하기 */
 function check17(){

    //메뉴 가격
    const gimbap=3000;
    const ramen=3500;
    const donkkaseu=5000;

    //주문 개수 카운트
    let gCount=0; //김밥
    let rCount=0; //라면
    let dCount=0; //돈가스

    // prompt로 입력한 값을 저장할 변수
    let input; //(undefined)

    while(input !== null){//취소 누르기 전까지 반복
        input=prompt("메뉴 번호를 입력하세요");

    
        switch(input){
            case '1':gCount++; break;
            case '2':rCount++; break;
            case '3':dCount++; break;
            case null: alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요.");
        }
    }
    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈가스 : ${dCount}`);

    let sum=(gCount*gimbap)+(rCount*ramen)+(dCount*donkkaseu);
    alert(`총 가격: ${sum} 원`);

 }


/* while을 for문 처럼 사용하기 */
 function check18(){
    //1부터 10까지 출력

/*     for(let num=1; num<=10; num++){
        console.log(num);
    } */

    let num=1;
    while(num<=10){
        console.log(num);
        num++;
    }

    console.log("----------------------------------");

    //10부터 1까지 1씩 감소
    let x=10;
    while(x>0){
        console.log(x);
        x--;
    }
 }