const express = require('express')
const app = express()

app.listen(8088, () => {
    console.log('服务启动')
})

let login = false;
//如果未登录，返回未登录，否则，继续向下匹配，回调函数接收三个参数，最后一个是next,继续向下执行，路径一定要写在最上面，不然会先被test捕捉到，test没有执行next,就会捕捉不到请求。
app.all('*', (req, res, next) => {
    if(!login) return res.json('未登录')
    next()
})
app.post('/test', (req, res) => {
    res.json('test')
})

app.get('/', (req, res) => {
    res.send('<div>hello world</div>')
})


app.post('/login', (req, res) => {
    res.json('<div>hello login</div>')
})


