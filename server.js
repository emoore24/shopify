var express = require('express'),
    h5bp = require('h5bp');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  // app.use(express.favicon());
  // app.use(express.logger('dev'));
  // app.use(express.bodyParser());
  // app.use(express.methodOverride());
  // app.use(app.router);
  // app.use(require('stylus').middleware(__dirname + '/public'));
  // app.use(express.static(path.join(__dirname, 'public')));
});

app.engine('.html', require('ejs').renderFile);

app.use(h5bp({ root: __dirname + '/public' }));

// in order to serve files, you should add the two following middlewares
app.use(express.compress());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(3000);
console.log("server listening");