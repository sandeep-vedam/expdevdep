#!/usr/bin/env node
import prompts from 'prompts'
import { red, cyan } from 'kolorist'
import ora from 'ora'
const spinner = ora()
//const prompts = require('prompts')


// let x = 10
// let y = 20

// if(x==y){
//   console.log("Hello")
// }
//  else {
//    console.log("Hi")
// }

const questions = [
  {
    type: 'text',
    name: 'q1',
    message: 'Whats your name',
    initial: 'Sample',
  },
]


const createApp = () => {
  console.log("Inside create app")
spinner.start(red('Started...............'))
spinner.succeed()
  return new Promise(async resolve => {
  
      console.log("Inside promise")
      let answ
        answ = await prompts(questions)
console.log("Value of answ is", answ)

  })
  }

createApp()

