const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

export default function handler(req, res) {
    var verify_result = false;
    if(req.method === 'POST'){
        const pwd_req = req.body['pwd'];
        if(pwd_req === '!QAZ2wsx') {
			verify_result = true;
		} else { 
			verify_result = false;
		}
	var res_data = {'verify_result': verify_result};
    }
    

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(res_data);
    
}



// app.get('/api', async (req, res) => {
//     const verify_result = false;
//     const userinfo = req.body
//      console.log(userinfo);
//     // const user_req = req.query.username;
//     if(user_req === '1') {
     
//       status=200,
//       message=='登录成功',
//       verify_result = true,

//     } else { 
//       status=400,
//       message=='密码错误',
//       verify_result = false,
//      }

//      res.setHeader("Access-Control-Allow-Origin", "*");
// });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
