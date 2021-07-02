#!/usr/bin/env node
const chalk = require('chalk')
const { userInfo } = require('os')
const prompt = require('prompt-sync')()
const setyear = require('./App')
const usernamee = userInfo().username
const { mkdirSync,writeFileSync } = require('fs')
const { join,resolve } = require('path')
const questions = [{ field: 'username', question: 'Github Username(' + usernamee + ') : ', defaultValue: usernamee, nolengthValidation: true }, { field: 'brname', defaultValue: 'main', question: 'Branch (main) : ', nolengthValidation: true }, { field: 'year', defaultValue: 1995, question: 'Year (1995) : ', nolengthValidation: true }, { field: 'repo', defaultValue: '1995', question: 'Repository (1995) : ', nolengthValidation: true }]
try {
if(prompt('Are you sure because its not that great (Y/n) :','y').toLocaleLowerCase()==='y'){
    var {year,brname,username,repo}= promptAns()
    mkdirSync(repo)
    writeFileSync(join(repo,'README.md'),'# '+year)
    console.log(setyear(username, Number(year), brname,repo,resolve(repo)))
    console.log(chalk.green('Done!!'))
}
else console.log(chalk.redBright.bold('Aborted !'))
}
catch (e) {
    console.log(chalk.redBright.bold('Oops we got a problem'))
}
function promptAns () {
    const answers = {}
    questions.forEach(qes => {
      answers[qes.field] = prompt(chalk.greenBright.bold(qes.question), qes.defaultValue)
    })
    return answers
  }