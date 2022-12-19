const os = require('os')
let user = os.uptime()
console.log(user);
const corrent = {
  name: os.hostname(),
  version: os.version(),
  fmem: os.freemem(),
  tmem: os.totalmem(),
  gt: os.cpus(),
  ft: os.release(),
  gh: os.platform(),
}
console.log(corrent);