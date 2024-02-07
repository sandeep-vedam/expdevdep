import prompts from 'prompts'
import path from 'path'
import ora from 'ora'
const spinner = ora()
import fs from 'fs'
import { cwd } from 'process'


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
  return new Promise(async resolve => {
    fs.mkdirSync(path.join(process.cwd(), 'new'), { recursive: true })
    console.log("Path is", path.join(process.cwd(),'git/.gitignore'))
    fs.copyFileSync(path.join(process.cwd(),'git/.gitignore'), path.join(process.cwd(), 'new/.gitignore'))
  
      console.log("Inside promise")
      let answ
        answ = await prompts(questions)
        spinner.succeed(`${answ.q1}`)
  })
  }

createApp()

