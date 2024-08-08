// plopfile
module.exports = function (plop) {
  /** @type {require('plop').NodePlopAPI} */
  // Registering printHello action
  plop.setActionType('printHello', function (answers, config, plop) {
    console.log(`Hello, ${answers.name}!`)
    return `Printed: Hello, ${answers.name}!`
  })
  // Setting the printHello generator
  plop.setGenerator('Say hi', {
    description: 'Say hello!',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter your name',
      },
    ],
    actions: [
      {
        type: 'printHello',
      },
    ],
  })
}
