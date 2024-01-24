const createBtn=document.querySelector("#createBtn");
const lottoBoard=document.querySelector("#lottoBorad");

createBtn.addEventListener("click",()=>{
    
    lottoBoard.innerHTML="";
 

    //div.number를 만들어서 추가하기
    for(let i=1; i<=45; i++){
        const number=document.createElement("div");
        number.classList.add("number");
        number.textContent=i;

        //만들어진 div.number에 클릭시 동작 추가
        number.addEventListener("click", e=>{
            console.log(e.target.textContent);

        //클릭 전에 화면에 선택된 요소가 5개 이하일 경우
        //+ 또는
        //클릭한 요소에 active클래스가 있을 경우
         const count=document.querySelectorAll(".active").length;

         if(count <= 5 || e.target.classList.contains("active")){
            /* 요소.classList.toggle(클래스명) :
              요소에 (클래스명)이 있으면 제거, 없으면 추가 */
            e.target.classList.toggle("active");
          }
          else{
            alert("6개 까지만 선택할 수 있습니다");
          }
        });
            /* active 클래스가 있으면 -> 추가 */
            /* active 클래스가 없으면 -> 제거 */
            /* 요소.classList.contains("글래스명"):
                요소에 (클래스명)이 존재하면 true 아니면 false */

        lottoBoard.append(number);
    }
});






