import prompts from 'prompts'
import ora from 'ora'


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
  
      console.log("Inside promise")
      let answ
        answ = await prompts(questions)
        ora(`Loading`).succeed(`${answ.q1}`)
  })
  }

createApp()

