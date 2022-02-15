// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');

    // get the amount dipositet


    // update deposit total

    const dipositedInput = document.getElementById('deposit-amount');
    // const dipositAmount = dipositedInput.value;
    // console.log(dipositAmount);


    const newDipositAmountText = dipositedInput.value;
    const newDipositAmount = parseFloat(newDipositAmountText);


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDipositTotal = previousDepositAmount
        + newDipositAmount;
    depositTotal.innerText = newDipositTotal;

    // update account balance



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBAlanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotal.innerText = newBAlanceTotal;











    // clear the deposit input field
    dipositedInput.value = '';


})

document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('withdraw-button clickes');

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);


    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    // update balance after withdraw

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;




    withdrawInput.value = '';




})