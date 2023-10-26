const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;


app.get('/', async (req, res) => {
    const verify_result = false;
    // const pwd_req = req.body['pwd'];
    // const user_req = req.query.username;
    const user_req = '1';
    if(user_req === '1') {
	verify_result = true;
    } else { 
 	verify_result = false;
     }
    var res_data = {'verify_result': verify_result};
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.status(200).send(res_data);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
