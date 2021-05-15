const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
        'Tip Calculator App',
        {
            horizontalLayout: 'full',
            font: 'speed'
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
        {'Bill Amount': `$${billAmount}`,
        'Tip (%)': `${percentage}%`,
        'Tip': `$${tip}`,
        'Total': `$${total}`
        }
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
            default: billAmount,
            validate: function(value){
                if(value>=0){
                    return true
                } else {
                    return 'Invalid number, bill amount must be >= 0'
                }
            }
        },
        {
            name: 'percentage',
            type: 'input',
            message: 'Tip(%)?',
            default: percentage,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Invalid number, tip(%) must be >= 0'
                }
            }
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