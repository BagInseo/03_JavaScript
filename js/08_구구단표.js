
function createTable(){

const start=Number(document.getElementById("start").value);
const end=Number(document.getElementById("end").value);
const theadRow=document.getElementById("thead-row");
const tbody=document.getElementById("tbody");


   

    tbody.innerHTML="";
    
    for(let num=1; num<=9; num++){

        theadRow.innerHTML="";
       

        let str="<tr>";

        for(let dan=start; dan<=end; dan++){
            str+=`<td>${dan} X ${num} = ${dan*num} </td>`;
            theadRow.innerHTML+=`<th>${dan}단</th>`;
        }
       str +="</tr>"

       tbody.innerHTML+=str;
    }
   
}