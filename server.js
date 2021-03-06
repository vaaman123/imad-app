var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require ('crypto');
var config = {
    user: 'vaman234',
    database: 'vaaman234',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var articles = {
     'article-1' : {
    title: 'article 1 I awesome vaaman',
    heading:'article 1',
    date: 'August 11, 2017',
    content:`<p>
                This is the content for article 1. It is just a basic web page written in html
            </p>
            <p>
                this is the content for article 1. It is just a basic web page written in html
            </p>
            <p>
                this is the content for article 1. It is just a basic web page written in html
            </p>`
    
    
},
     'article-2' : {
    title: 'article 2 I awesome vaaman',
    heading:'article 2',
    date: 'August 15, 2017',
    content:`<p>
                This is the content for article 2. It is just a basic web page written in html
            </p>
            <p>
                this is the content for article 2. It is just a basic web page written in html
            </p>
            <p>
                this is the content for article 2. It is just a basic web page written in html
            </p>`
         
     },
     'article-3' : {
   title: 'article 3 I awesome vaaman',
    heading:'article 3',
    date: 'August 15, 2017',
    content:`<p>
                This is the content for article 3. It is just a basic web page written in html
            </p>
            <p>
                this is the content for article 3. It is just a basic web page written in html
            </p>
            <p>
                this is the content for article 3. It is just a basic web page written in html
            </p>`
     }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = 
`<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
       
    </head>
    <body>
        <div class = "container">
        <div>
            <a href = "/" >home</a>
           
        </div>
        
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
            
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash (input, salt){
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}
app.get('/hash/:input', function (req, res) {
    var hashedString = hash (req.params.input, 'this-is-some-silly-file');
    res.send(hashedString);
});



var counter = 0;
app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));  
}

);    
 
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
