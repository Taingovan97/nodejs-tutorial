const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.text', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result-sync.txt', `result sync: ${first} and ${second}`, { flag: 'a' })

console.log('done with this task')
console.log('starting the next one')