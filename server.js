const express = require('express');

const app = express();

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir:`${__dirname}/views/layout`,
    extname:`hbs`,
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));

app.get ('/',  function(req, res){
    res.render('main');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));