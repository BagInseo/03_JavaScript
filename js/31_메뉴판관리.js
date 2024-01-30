const resName=document.querySelector("#resName");
const resNameInput=document.querySelector("#resNameInput");

const menuContainer=document.querySelector(".menu-container");
const updateBtn=document.querySelector("#updateBtn");
const addManu=document.querySelector("#addManu");
const deleteMenu=document.querySelector("#deleteMenu");
const exitBtn=document.querySelector("#exitBtn");

const  normalContainal=document.querySelector(".normal-containal");
const editContainer=document.querySelector(".edit-container");


// 요소 추가 함수
const newEl=(tag,attr,cls)=>{
    const el=document.createElement(tag);

    for(let key in attr){
        el.setAttribute(key,attr[key]);
    }
    for(let className of cls){
        el.classList.add(className);
    }

    return el;
};


// 메뉴 내부 요소 생성 함수
const createMenuContent =()=>{

    const check = newEl("input", {type:"checkbox"}, ["menu-check"]);
    const menuNameInput=newEl("input",{type: "text", placeholder:"메뉴명"}, ["menu-name-input"]);
    const menuPriceInput=newEl("input",{type:"text", placeholder:"가격"}, ["menu-price-input"]);

    return {"check": check, "menuNameInput": menuNameInput, "menuPriceInput": menuPriceInput} 
};




//식당 이름 입력
resName.addEventListener("click", e=>{
    e.target.classList.toggle("res-name-hidden");
    resNameInput.classList.toggle("res-name-hidden");

    let beforeName=e.target.textContent;
    if(beforeName=="식당명을 입력하세요") beforeName="";

    resNameInput.value=beforeName;
    resNameInput.focus();

});
/* blur */
resNameInput.addEventListener("blur",e=>{
    resName.textContent=e.target.value;

    if(e.target.value.trim().length==0) resName.textContent="식당명을 입력하세요";

    e.target.classList.toggle("res-name-hidden");
    resName.classList.toggle("res-name-hidden");
});





//수정 버튼 눌렀을 때
updateBtn.addEventListener("click", e=>{
    normalContainal.classList.toggle("b-hidden");
    editContainer.classList.toggle("b-hidden");

    const menuList=document.querySelectorAll(".menu");
    menuList.forEach(menu => {
        const menuName=menu.children[0].textContent;
        let menuPrice=menu.children[1].textContent;
        
        menuPrice=menuPrice.substring(0,menuPrice.length-1);

        const menuContent=createMenuContent();

        menuContent.menuNameInput.value=menuName=="미입력"? "" : menuName;
        menuContent.menuPriceInput.value=menuPrice=="미입력"? "" : menuPrice;

        menu.innerHTML="";

        for(let key in menuContent){
            menu.append(menuContent[key]);
        }
    });
});

//종료버튼 클릭
exitBtn.addEventListener("click", e=>{
    normalContainal.classList.toggle("b-hidden");
    editContainer.classList.toggle("b-hidden");

    const menuList=document.querySelectorAll(".menu");
    menuList.forEach(menu => {
            const menuNameInput=menu.children[1].value;
            const menuPriceInput=menu.children[2].value;

            const menuName=newEl("span",{},["menu-name"]);
            menuName.textContent=menuNameInput.trim().length==0? "미입력" : menuNameInput;

            const menuPrice=newEl("span",{},["menu-price"]);
            menuPrice.textContent=(menuPriceInput.trim().length==0? "0" : menuPriceInput)+"원";

            menu.innerHTML=""
            menu.append(menuName,menuPrice);
    });
})


//추가버튼 클릭
addManu.addEventListener("click",e=>{

    if(document.querySelectorAll(".menu").length>=15){
        alert("더 이상 메뉴를 추가할 수 없습니다");
        return;
    }

    const li=newEl("li",{},["menu"]);

    const menuContent=createMenuContent();

    for(let key in menuContent){
        li.append(menuContent[key]);
    }
    menuContainer.append(li);
})



//삭제버튼 클릭
deleteMenu.addEventListener("click", e=>{
    const checkMenu=document.querySelectorAll(".menu-check:checked");
    checkMenu.forEach(item => {
        item.parentElement.remove(); //.main 클래스 삭제
        
    });
})
