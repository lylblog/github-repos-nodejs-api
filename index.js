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
    
};

app.get('/', async (req, res) => {
   const verify_result = false;
	res.status(200).send(verify_result);
  //  const username = req.query.username;
  //  try {
  //    const result = await axios.get(
  //      `https://api.github.com/users/${username}/repos`
  //   );
  //  const repos = result.data
  //      .map((repo) => ({
  //      name: repo.name,
  //      url: repo.html_url,
  //      description: repo.description,
  //      stars: repo.stargazers_count
  //    }))
  //   .sort((a, b) => b.stars - a.stars);
  //   res.send(repos);
  // } catch (error) {
  //   res.status(400).send('Error while getting list of repositories');
  // }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
