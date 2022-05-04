const { spawn } = require('child_process')

spawn('node', ['test.js'], {
  stdio: [process.stdin, process.stdout, process.stderr],
})
