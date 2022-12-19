const http = require('http')
const server = http.createServer((req, res) => {
  res.write('wlcome to my home page hope you like it');
  res.end();
})
server.listen(5000)