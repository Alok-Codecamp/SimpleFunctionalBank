// function for getInput Value

function getInput(inputId) {
  const input = document.getElementById(inputId);
  const inputText = input.value;
  const inputValue = parseFloat(inputText);
  input.value = "";
  return inputValue;
}

// function for add balance

function addBalance(BalanceId, NewBalance, isAdd) {
  const mainBalance = document.getElementById(BalanceId);
  const oldBalanceText = mainBalance.innerText;
  const oldBalancevalue = parseFloat(oldBalanceText);
  let totalBalance;
  if (isAdd == true) {
    totalBalance = oldBalancevalue + NewBalance;
    mainBalance.innerText = totalBalance;
  } else {
    totalBalance = oldBalancevalue - NewBalance;
    mainBalance.innerText = totalBalance;
  }
}

// adding addEventListener in diposit button

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    let dipositInput = getInput("deposit-input");
    console.log(dipositInput);
    if (dipositInput > 0) {
      addBalance("deposit-total", dipositInput, true);

      addBalance("balance-total", dipositInput, true);
    }
  });

// adding addEventListener for withdraw button

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = getInput("withdraw-input");
    if (withdrawInput > 0) {
      addBalance("withdraw-total", withdrawInput, true);

      addBalance("balance-total", withdrawInput, false);
    }
  });
