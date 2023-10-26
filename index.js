const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;


app.get('/api', async (req, res) => {
    const verify_result = false;
    const userinfo = req.body
     console.log(userinfo);
    // const user_req = req.query.username;
    if(user_req === '1') {
     return res.send({
      status:200,
      message:'登录成功',
      verify_result = true,
     })
    } else { 
 	   res.send({
     status: 400,
     message: '密码错误！',
     verify_result = false;
     })
     }

     res.setHeader("Access-Control-Allow-Origin", "*");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
