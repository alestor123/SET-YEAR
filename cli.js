#!/usr/bin/env node
const chalk = require('chalk')
const { userInfo } = require('os')
const prompt = require('prompt-sync')()
const usernamee = userInfo().username
const { mkdirSync } = require('fs')
const questions = [{ field: 'username', question: 'Github Username(' + usernamee + ') : ', defaultValue: usernamee, nolengthValidation: true }, { field: 'brname', defaultValue: 'main', question: 'Branch (main) : ', nolengthValidation: true }, { field: 'year', defaultValue: 1995, question: 'Year (1995) : ', nolengthValidation: true }]
try {
    console.log(promptAns())
    console.log(chalk.green('Done!!'))
}
catch (e) {
    console.log(chalk.red.bold('Oops we got a problem'))
}
function promptAns () {
    const answers = {}
    questions.forEach(qes => {
      answers[qes.field] = prompt(chalk.greenBright.bold(qes.question), qes.defaultValue)
    })
    return answers
  }