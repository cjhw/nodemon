const Koa = require('koa')
const app = new Koa()
app.use((ctx) => {
  ctx.body = 'hello,扑街jjj'
})

app.listen(3000)
//nodemon
// 1. 当代码改变时
// -fs.watch()
// chokidar库(好用)
// 2. 重启服务(要把之前的进程杀死)
// - node main.js -> command
// - nodejs -> exec || spawn
