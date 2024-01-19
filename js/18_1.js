const addBtn=document.querySelector("#addBtn");
const sumBtn=document.querySelector("#sumBtn");


addBtn.addEventListener("click",() => {

    const divArea=document.querySelector(".divArea");


    const newInput=document.createElement("input");
    const removeBtn=document.createElement("button");
    newInput.type="number"
    newInput.classList.add("inputDiv"); //class추가
    removeBtn.classList.add("removeBtn");

    console.log(newInput);
    console.log(removeBtn);

    divArea.append(newInput); //화면에 나오게하기
    divArea.append(removeBtn); //화면에 나오게하기

   
});

sumBtn.addEventListener("click",()=>{

    const inputDiv=document.querySelectorAll(".inputDiv");


    let sum=0;

    for(let i=0; i<inputDiv.length; i++){
        sum+=Number(inputDiv[i].value);
    }
    console.log(sum);
})