document.getElementById('deposit-button').addEventListener('click',function()
{
    // console.log('deposit button clicked');
    let depositForm = document.getElementById('deposit-form');
    let depositFormFValue = depositForm.value;
    let depositIntValue = parseInt(depositFormFValue);
    //   console.log(depositIntValue);
    let depositTotal = document.getElementById('deposit-total');
    
    let previousDepositAmount = parseInt(depositTotal.innerText);
    // depositTotal.innerText += depositFormFValue;
    depositTotal.innerText = previousDepositAmount + depositIntValue;
     let totalBalance = document.getElementById('total-balance');
     let previousTotalBalance = totalBalance.innerText;
     let previousTotalBalanceInt = parseInt(previousTotalBalance);
     let finalAmountAfterDeposit = previousTotalBalanceInt + parseInt(depositFormFValue);
     totalBalance.innerText = finalAmountAfterDeposit;
     console.log(previousTotalBalance);
    // depositForm.value =' ';



})
document.getElementById('withdraw-button').addEventListener('click',function(){
    // console.log('withdraw button clicked');
    let withdrawAmount = document.getElementById('withdraw-amount');
    let withdrawForm = document.getElementById('withdraw-form');
    let totalBalance = document.getElementById('total-balance');
    let amountOfWithdrawMoney = parseInt(withdrawForm.value);
    let intTotalBalance = parseInt(totalBalance.innerText);
    let presentAmount = intTotalBalance - amountOfWithdrawMoney;
    let previousWithdrawAMmount = withdrawAmount.innerText;
    totalBalance.innerText = presentAmount;
     withdrawAmount.innerText =  parseInt(previousWithdrawAMmount) + parseInt(withdrawForm.value);
    
    // console.log(intTotalBalance);


    withdrawForm.value=' ';

})