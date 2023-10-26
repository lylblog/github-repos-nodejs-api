const express = require('express')
const app = express()
// 解析参数
const bodyParser = require('body-parser')

// json请求
app.use(bodyParser.json())
// 表单请求
app.use(bodyParser.urlencoded({extended: false}))
app.listen(8088, () => {
    console.log('服务启动')
})


//如果未登录，返回未登录，否则，继续向下匹配，回调函数接收三个参数，最后一个是next,继续向下执行，路径一定要写在最上面，不然会先被test捕捉到，test没有执行next,就会捕捉不到请求。
// let login = true;
// app.all('*', (req, res, next) => {
//     if(!login) return res.json('未登录')
//     next()
// })

// 访问方式：https://api-lp3d.onrender.com/login:data?id=2&pwd=!QAZ2wsx
// app.post('/login:data', (req, res) => {
//     return res.json({query: req.query, data: req.params, json: req.body})
// })

// 访问方式：https://api-lp3d.onrender.com/login?id=2&pwd=!QAZ2wsx
app.post('/login', (req, res) => {
    const pwd_req = req.body['pwd'];
    if(pwd_req === '!QAZ2wsx') {
		verify_result = true;
	} else { 
		verify_result = false;
	}
    var res_data = {'verify_result': verify_result};
    // return res.setHeader("Access-Control-Allow-Origin", "*");
    // return res.status(200).send(res_data);
    return res.json({query: req.query, json: req.body, res_data: res_data})
})
