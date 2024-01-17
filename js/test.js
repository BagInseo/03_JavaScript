function check1(){

    const arr=[10,20,30,40,50,60];

    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
    }
}

function check2(){
    const arr=new Array(5);

    for(let i=0; i<arr.length;i++){
        arr[i]=Number(prompt(`${i}번쨰 숫자를 입력`));
    }
    console.log(arr);

    //각 요소의 합 구하기
    let sum=0;

    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        sum+=arr[i];
    }
    console.log("합계 : " +sum);
    console.log("평균 : "+ sum/arr.length);
}


function selectMenu(){
    const menuResult=document.getElementById("menuResult");

    const menus=["김밥","제육볶음","돈가스",
    "파스타","샐러드","라면","햄버거",
    "순대국밥"," 닭갈비","초밥",
    "알탕", "삼겹살"];

    const randomNumber=Math.floor(Math.random()*menus.length);

    //난수 번째의 index요소를 화면에 출력하기
    menuResult.innerText=menus[randomNumber];
}


function orderFn(){
    
    const tbody=document.getElementById("tbody");
    const total=document.getElementById("total");

    const menus=["라면","김밥","샌드위치","우동"];
    const prices=[4000, 3000, 5000, 6000];
    const counts=new Array(menus.length);

    counts.fill(0);

}