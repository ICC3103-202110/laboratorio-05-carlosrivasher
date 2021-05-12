function tipCalculator(billAmount, percentage){
    return ((billAmount*percentage))/100
    
}

function update(input1,input2,model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    const newTip = tipCalculator(input1, input2)
    const newTotal = (Number(input1)+newTip)
    return {
        ...model,
        billAmount: Number(input1).toFixed(2),
        percentage: Number(input2).toFixed(2),
        tip: newTip.toFixed(2),
        total: newTotal.toFixed(2)
    }
}

module.exports = {
    update
}