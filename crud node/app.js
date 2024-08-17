const express = require('express');

const app = express();
// resdistor view engine
app.set('view engine', 'ejs');


app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<p>s;nblknwev</p>'); 
    // res.sendFile('./views/index.html', {root: __dirname}) 
    res.render('index');
})
app.get('/about', (req, res)=>{
    // res.sendFile('./views/about.html', {root: __dirname})  
    res.render('about');
})
app.get('/blog/create', (req, res)=>{
    res.render('create');
})

app.use((req, res)=>{
    // res.send('<p>s;nblknwev</p>');
    res.status(404).render('404')
})
