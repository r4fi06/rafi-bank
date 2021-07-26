//login button event handler

let loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    let loginArea = document.getElementById("loginArea");
    loginArea.style.display ="none";
    let transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block";
});

//deposit button event handler
let depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    let depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber)
    updateSpanText ("currentBalance", depositNumber)

    document.getElementById("depositAmount").value = "";
});

// withdraw button event handler

let withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
   let withdrawNumber = getInputNumber("withdrawAmount");
   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", -1* withdrawNumber);
   document.getElementById("withdrawAmount").value = "";

});
function getInputNumber(id){
    let withdrawAmount = document.getElementById(id).value;
    let withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id, depositNumber){
    let current = document.getElementById(id).innerText;
    let currentNumber = parseFloat(current);
    totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;
}


