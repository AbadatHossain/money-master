
document.getElementById('calculate').addEventListener('click', function () {
  
  innerText ('remain-balance', calculateBalance())
})

document.getElementById('btn-save').addEventListener('click', function () {
   const saveField = inputField('save-after-expense')
   const calculatingSavings = saveField * 0.01
   const incomeField = inputField('income')
   const savingAmount = calculatingSavings * incomeField
   innerText('savings', savingAmount)
   const remainBalance = calculateBalance() - savingAmount
   innerText('remain', remainBalance)
    
})

