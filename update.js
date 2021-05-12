function tip(billAmount, percentage){
    return Math.floor(billAmount*percentage)/100
}

function update(input1,input2,model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    const newTip = tip(billAmount, percentage)
    const newTotal = newTip + billAmount
    return {
        ...model,
        billAmount: input1,
        input1: input1,
        percentage: input2,
        input2: input2,
        tip: newTip,
        total: newTotal
    }
}

module.exports = {
    update
}