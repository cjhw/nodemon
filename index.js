const chokidar = require('chokidar')
const { spawn } = require('child_process')
const { debounce } = require('./debounce')

let childProcess
let debounceRestart = debounce(restart, 500)

// One-liner for current directory
chokidar.watch(['main.js']).on('all', (event, path) => {
  console.log(event, path)
  debounceRestart()
})

function restart() {
  console.log('restart')
  childProcess && childProcess.kill()
  childProcess = spawn('node', ['main.js'], {
    stdio: [process.stdin, process.stdout, process.stderr],
  })
}
