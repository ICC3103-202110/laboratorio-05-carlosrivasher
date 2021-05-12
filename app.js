const {inputValues} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {tittle, table} = currentView
        console.clear()
        console.log(tittle)
        printTable(table)
        const values = await inputValues(model)
        const updateModel = update(values['billAmount'], values['percentage'], model)
        state = {
            ...state,
            model: updateModel,
            currentView: view(updateModel)
        }
    }
}

module.exports = {
    app
}