const text=document.querySelector("#text");
const result=document.querySelector("#result");
const btn=document.querySelector("#btn");


btn.addEventListener("click",()=>{

    /* 너비 */
    const widthValue=Number(document.querySelector("#width").value);
    console.log(widthValue);
    result.style.width=`${widthValue}px`;

    /* 높이 */
    const heightValue=Number(document.querySelector("#height").value);
    console.log(heightValue);
    result.style.height=`${heightValue}px`;


    /* 글자크기 */
    const sizeValue=Number(document.querySelector("#textSize").value);
    console.log(sizeValue);
    result.style.fontSize=`${sizeValue}px`;


    /* 글자색 */
    const colorValue=document.querySelector("#color").value;
    console.log(colorValue);
    result.style.color=colorValue;

    /* 배경색 */
    const bgValue=document.querySelector("#backgroundColor").value;
    console.log(bgValue);
    result.style.backgroundColor=bgValue;


    /* 굵기 */
    const textWeight=document.querySelector("[name='textWeight']:checked").value;
    console.log(textWeight);
    result.style.fontWeight=textWeight;

    /* 가로정렬 */
    const garo=document.querySelector("[name='garo']:checked").value;
    console.log(garo);
    result.style.justifyContent=garo;

    /* 세로 정렬 */
    const sero=document.querySelector("[name='sero']:checked").value;
    console.log(sero);
    result.style.alignItems=sero;

    /* 문자열 */
    const str=text.value;
    console.log(str);
    result.innerText=str;



});

