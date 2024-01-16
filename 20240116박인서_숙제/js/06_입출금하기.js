const balance = document.getElementById("balance");
const sum = document.getElementById("sum");
const password='1234';

balance.value = 0;

function deposit() {
  const value1 = Number(balance.value);
  const value2 = Number(sum.value);

  balance.value = value1 + value2;
  balance.innerText = balance.value;
}

function withdraw() {
  const value1 = Number(balance.value);
  const value2 = Number(sum.value);

  const password=prompt('비민번호를 입력하세요')
  const pw=Number(password);

  if(pw == '1234'){
    if(value2>balance.value){
      alert("출금 금액이 잔액보다 클 수 없습니다")
    }else{
      balance.value = value1 - value2;
      balance.innerText = balance.value;
      alert(value2+"원이 출금 되었습니다. 남은 잔액 : "+ balance.value+"원")
    }
  }else{
    alert("비밀번호가 일치하지 않습니다")
  }
}

/* prompt 사용 연습 */

function test(){

  const password = prompt("비밀번호를 입력하세요");

  // 확인 -> 입력한 문자열
  // 취소 -> null

  if(password == null){ // 취소
    alert("취소");
  
  } else{ // 확인
     
    // 입력한 비밀번호가 '1234'가 맞는지 확인
    if(password == '1234'){
      alert("비밀번호 일치");
   
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
  }

}
