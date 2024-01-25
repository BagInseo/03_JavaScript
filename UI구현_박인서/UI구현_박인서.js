const numberInput=document.querySelector("#numberInput");
const numbers=document.querySelectorAll(".number");
const resetBtn=document.querySelector("#reset");
const addBtn=document.querySelector("#add");
const list=document.querySelector(".list");
const newListLine=document.querySelectorAll(".listLine");
const saveNum=document.querySelector("#savedNum");
const starBtn=document.querySelector(".star");
const deleteBtn=document.querySelector(".delete");


/* 번호 입력 */
numbers.forEach(element => {
    element.addEventListener("click",() =>{
        // console.log(element.textContent);
        numberInput.textContent+=element.textContent;
    })
});


/* 초기화 버튼 */
resetBtn.addEventListener("click",()=>{
    numberInput.textContent="";
})

/* 추가 버튼 */
addBtn.addEventListener("click",()=>{

    const newListLine=document.createElement("div");
    const newNum=document.createElement("span");
    const sBtn=document.createElement("div");
    const dBtn=document.createElement("div");

    newListLine.classList.add("listLine");
    newNum.classList.add("savedNum");
    sBtn.classList.add("star");
    dBtn.classList.add("delete");


    newNum.textContent=numberInput.textContent;
    sBtn.textContent="☆";
    dBtn.textContent="x";

  /*   console.log(numberInput.textContent);
    console.log(newNum.textContent);
    console.log(sBtn.textContent);
    console.log(dBtn.textContent); */

    if(newNum.textContent.trim().length>0){
        newListLine.append(newNum,sBtn,dBtn);
        list.append(newListLine);
    }

    //즐겨찾기 버튼 누른 경우()
    sBtn.addEventListener("click",() => {

        if(sBtn.textContent=="☆"){
            sBtn.textContent='★'
            sBtn.className='selectStar';
            newNum.className='selectNum';
            return;
        }
        sBtn.textContent="☆";
        sBtn.className='star';
        newNum.className='savedNum';
    });

    //삭제 버튼 누른 경우(dBtn)
    dBtn.addEventListener("click",() => {
        newListLine.remove();
    });

    //누적된 클릭한 번호 지우기
    numberInput.textContent="";
})


