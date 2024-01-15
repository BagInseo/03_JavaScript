const balance = document.getElementById("balance");
const sum = document.getElementById("sum");

balance.value = 0;

function deposit() {
  const value1 = Number(balance.value);
  const value2 = Number(sum.value);

  balance.value = value1 + value2;
  balance.innerText = balance.value;

  console.log(value1);
  console.log(value2);
  console.log(value1 + value2);
}

function withdraw() {
  const value1 = Number(balance.value);
  const value2 = Number(sum.value);

  balance.value = value1 - value2;
  balance.innerText = balance.value;

  console.log(value1);
  console.log(value2);
  console.log(value1 - value2);
}
