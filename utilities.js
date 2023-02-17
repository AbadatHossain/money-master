function inputField(elementId){
    const inputString = document.getElementById(elementId).value
    const inputField = parseFloat(inputString)
    return inputField

}

function innerText(elementId, value){
    const inputTextId = document.getElementById(elementId)
    inputTextId.innerText = value
}


function calculateBalance(){
    const incomeField = inputField('income')
    const rentCost = inputField('rent-cost')
    const foodCost = inputField('food-cost')
    const clothsCost = inputField('cloths-cost')   
    const totalExpenses =foodCost + rentCost +clothsCost

    innerText('total-expense', totalExpenses)

    const calculateBalance = incomeField - totalExpenses
    return calculateBalance
   
}
