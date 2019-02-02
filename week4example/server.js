const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', hbs);
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));

hbs.registerHelper('ptag',(num, message)=>{
    var msg = '';
    for(let i=0; i<num; i++)
    {
        msg+=`<p>${message}</p>`;
    }

    return msg;
});
//app.use(dateLogger);

/*function dateLogger(req,res,next){
    let date = new Date();
    console.log(date);
    req.date = date;
    next();
}
app.get('/', dateLogger,(req,res)=>{
    console.log(req.body);
})*/

app.get('/form',()=>{
    res.render('form.hbs');
})

app.post('/results',(req,res)=>{
    res.render('results.hbs', {num:req.body.num});
})

app.use((req,res,next)=>{
    const error = new Error('Page not found'); //Error() is built into js
    error.status = 404;
    next(error);
})

//error middleware that will receive the error message created ^^
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.render('error.hbs',{
        message: `${error.status} ${error.message}`
    });
})

/*app.get('*', (req,res)=>{
    res.render("error.hbs")
})*/

/*app.get('/', (req, res)=>{
    console.log("words" + req.date);
})*/

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})

