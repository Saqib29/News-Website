const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;

// static field
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));


// Template Engine
app.set('views' ,'./resources/views');
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});