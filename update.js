function tipCalculator(billAmount, percentage){
    return ((billAmount*percentage))/100
    
}

function update(input1,input2,model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    const newTip = tipCalculator(input1, input2)
    const newTotal = (parseInt(input1)+newTip)
    return {
        ...model,
        billAmount: `$${input1}`,
        percentage: `${input2}%`,
        tip: `$${newTip}`,
        total: `$${newTotal}`
    }
}

module.exports = {
    update
}