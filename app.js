const {inputValues} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    const {model, currentView} = state
    const {tittle, table} = currentView
    console.clear()
    console.log(tittle)
    printTable(table)
    const {input1} = await inputValues(model)
    console.log(input1)
}

module.exports = {
    app
}