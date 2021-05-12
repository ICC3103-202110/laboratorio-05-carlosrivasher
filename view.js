const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
        'Tip Calculator App',
        {
            horizontalLayout: 'full',
            font: 'Nancyj-Underlined'
        }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return [
        {'Bill Amount': billAmount,
        'Tip (%)': percentage,
        'Tip': tip,
        'Total': total}
    ]
}

function inputValues(model){
    const {billAmount} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'input',
            message: 'Bill Amount?',
            default: billAmount
        },
        {
            name: 'percentage',
            type: 'input',
            message: 'Tip(%)?',
            default: percentage
        }
    ])
}

function view(model){
    return {
        tittle: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputValues
}