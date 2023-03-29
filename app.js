// GLOBALS - NO WINDOW!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules
// module       - intro about current modules
// process      - intro about env where the program is being executed

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]

const myitem = _.flattenDeep(items)
console.log(myitem)

