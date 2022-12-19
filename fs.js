const fs = require('fs')
fs.writeFileSync('./content/ahmanny', 'oh yeah my name is solomon what about u ???')
let ahmanny = fs.readFileSync('./content/ahmanny', 'utf8')
console.log(ahmanny);