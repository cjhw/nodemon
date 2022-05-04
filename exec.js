const { exec } = require('child_process')

exec('node test.js', (err, stdout) => {
  console.log(stdout)
})
