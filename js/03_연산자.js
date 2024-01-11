// 변수 선언

//document(문서) : HTML문서(파일) 내에서
//get : 얻다
//element : HTML 요소 
//ById: 아이디가 일치하는 

// -> HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다.
const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("clacResult");

/* 두 수를 더해서 화면에 출력하는 함수 */
function plusFn(){

    //input요소.value : imput 요소에 작성된 값 얻어오기
    const value1=number1.value;
    const value2=number2.value;

    console.log(value1,value2);
    console.log("두 수의 합 : ", value1+value2);
    //input 요소에 작성된 값은 무조건 문자열 형태라서
    //더했을 때 이어쓰기 되는 문제가 발생한다. 

    //[해결방법]
    //문자열(string)을 숫자(number)로 변경하는 코드를 수행
    // -> 데이터 파싱(data parsing) : 데이터의 종류를 바꿈

    /* 숫자만 작성된 문자열("123")을 진짜 숫자(123)로 바꾸는 방법
        -> Number("123")
    */
    console.log("두 수의 합 : ",Number(value1)+Number(value2));
    
    /* 두 수의 합을 아이디가 calcResult인 요소의 
       내부 글자(innerText, HTML 요소 내용)로 대입하기
        */
     result.innerText=Number(value1)+Number(value2);

}//plusFn

function minusFn(){
    const value1=Number(number1.value);
    const value2=Number(number2.value);

    console.log("value1 :", value1, " value2 :", value2);
    console.log("두 수의 차: " ,value1-value2 );
    result.innerText=value1-value2;
}//minusFn()

function multiFn(){
    const value1=Number(number1.value);
    const value2=Number(number2.value);

    result.innerText=value1*value2;
    console.log("value1 :", value1, " value2 :", value2);
    console.log("두 수의 곱: " ,value1*value2 );

}//multiFn()

function divFn(){
    const value1=Number(number1.value);
    const value2=Number(number2.value);
    result.innerText=value1/value2;
    console.log("value1 :", value1, " value2 :", value2);
    console.log("두 수의 나머지: " ,value1/value2 );
}// divFn()


/* 나머지 연산 함수 */
function modFn(){
    /* 나머지 연산은 나누기 계산 시 
    몫이 정수인 부분까지만 계산하고 남은 나머지 값을 출력한다 */

    const value1=Number(number1.value);
    const value2=Number(number2.value)
    result.innerText=value1%value2;
    console.log("value1 :", value1, " value2 :", value2);
    console.log("두 수의 나머지: " ,value1%value2 );
}//modFn()

//----------------------------------------------------------------------

const num_1=document.getElementById("num1");
const num_2=document.getElementById("num2");
const num_3=document.getElementById("num3");
const sumTotal=document.getElementById("total");

function totalSumFn(){
    const numValue1=Number(num_1.value);
    const numValue2=Number(num_2.value);
    const numValue3=Number(num_3.value);

    sumTotal.innerText=numValue1+numValue2+numValue3;

}

function totalMinusFn(){
    const numValue1=Number(num_1.value);
    const numValue2=Number(num_2.value);
    const numValue3=Number(num_3.value);

    sumTotal.innerText=numValue1-numValue2-numValue3;
}

// ---------------------------------------------------------




/* 증감 연산자(++, --) */

//증가/감소할 수를 저장할 변수 선언
let count=0; //(주의) const로 선언하면 값을 증가/감소 시킬 수 없다

//문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2=document.getElementById("result2");

/* 증가 함수 */
function increase(){
    count++; // 또는 ++count
    result2.innerText=count;
}//increase()

/* 감소 함수 */
function decrease(){
    count--; //또는 --count
    result2.innerText=count;
}//decrease()



/* 전위, 후위 연산 확인하기 */

function check1(){
    //함수 밖, 안은 구분되는 공간으로 생각하면 된다
    //밖에 작성한 count, 안에 작성한 count는 서로 다른 변수(동명이인)
    let count=100;


    //컴퓨터한테 연산은 +,-,*,/ 뿐만 아니라 
    //코드를 하나하나 실행하는 것들이 연산이다. 


    //전위 연산(++count ,--count)
    //-> 다른 연산보다 먼저 수행된다.
    //-> count값이 먼저 증가/감소된 후 console에 출력된다.  
    console.log("++count : ",++count);
    console.log("++count : ",++count);
    console.log("++count : ",++count);
    console.log("--------------------------------------");
    console.log("--count : ",--count);
    console.log("--count : ",--count);
    console.log("--count : ",--count);

    //후위 연산(count++, count--)
    // -> 다른 연산이 다 끝나고 마지막에 수행
    count=50;

    console.log("---------------------------------------");
    console.log("count++ : ", count++); //50출력 후 51로 증가
    console.log("후위 연산 후 count++ : ", count++);

    console.log("---------------------------------------");
    console.log('count-- : ', count--);
    console.log("후위 연산 후 count-- : ", count--);


    console.log("---------------------------------------");
    
    let a=10;
    let b=5;
    let c= ++a * b--;
    //최종적으로 a,b,c에 저장된 값은?
    //a == 11
    //b ==4
    //c ==55
    console.log(a,b,c);

}