#!/usr/bin/env node
import prompts from 'prompts'
import { red, cyan } from 'kolorist'
import path from 'path'
import ora from 'ora'
const spinner = ora()
import fs from 'fs'
import { cwd } from 'process'
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
    fs.mkdirSync(path.join(process.cwd(), 'new'), { recursive: true })
    console.log("Path is", path.join(process.cwd(),'git/gitignore'))
    fs.copyFileSync(path.join(process.cwd(),'git/gitignore'), path.join(process.cwd(), 'new/.gitignore'))
  
      console.log("Inside promise")
      let answ
        answ = await prompts(questions)
console.log("Value of answ is", answ)

  })
  }

createApp()

