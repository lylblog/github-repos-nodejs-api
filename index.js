// const express = require('express');
// const axios = require('axios');
// const app = express();
// const PORT = process.env.PORT || 8081;


// app.get('/', async (req, res) => {
//     const verify_result = false;
//     // const pwd_req = req.body['pwd'];
//     // const user_req = req.query.username;
//     const user_req = '1';
//     if(user_req === '1') {
// 	verify_result = true;
//     } else { 
//  	verify_result = false;
//      }
//     var res_data = {'verify_result': verify_result};
//      res.setHeader("Access-Control-Allow-Origin", "*");
//      res.status(200).send(res_data);
// });

// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });
// 导入express模块
const express = require('express')

 
// 导入加密模块
const bcrypt = require('bcryptjs')
 
// 创建路由对象
const router = express.Router()
 
// 导入JWT
const jwt = require('jsonwebtoken')
// 定义密钥
const jwtSecreKey = 'notbald'
 
 
// 登录接口
router.post('/login',(req,res)=>{
    const userinfo = req.body
        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password,results[0].password)
        if(!compareResult) return res.send({status:1,message:'密码错误'})
        // 生成token字符串，展开运算符，剔除密码和用户头像
        const user = {...results[0],password:'',user_pic:''}
        // console.log(user);
        
        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, jwtSecreKey, {
        expiresIn: '10h', // token 有效期为 10 个小时
            })
            
            res.send({
                status: 0,
                message: '登录成功！',
                // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
                token: 'Bearer ' + tokenStr,
              })
    })
})
