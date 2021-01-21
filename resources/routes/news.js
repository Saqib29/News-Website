const express = require('express');
const router  = express.Router();
const axios   = require('axios');


router.get('/', async (req, res) => {
    try{
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
        // console.log(newsAPI.data);
        res.render('news', { articles : newsAPI.data }); 

    }catch(err) {
        if(err.response) {
            res.render('news', { articles : null }); 

            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if(err.requiest) {
            res.render('news', { articles : null }); 

            console.log(err.requiest);
        } else {
            res.render('news', { articles : null }); 

            console.error('Error', err.message);
        }
    }
});

module.exports = router;