const path = require('path')

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)
console.log(path.resolve('/content', 'subfolder', __dirname, 'test.txt'))