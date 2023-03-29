const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.text', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `final: ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with task')
        })
    })
})
console.log('starting the next one')