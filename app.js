var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/project/:id',function(req,res){
    id = req.params.id;

    if(id=="ips"){
        res.render("ips.ejs");
    }
    else if(id=="wildlife"){
        res.render("wildlife.ejs");
    }
    else if(id=="testedok"){
        res.render("testedok.ejs");
    }
    else if(id=="handwash"){
        res.render("handwash.ejs")
    }
    else if(id=="popcorn"){
        res.render("popcorn.ejs")
    }
    else if(id=="tensile"){
        res.render("tensile.ejs")
    }
})
app.get('/download', function(req, res){
    const file = __dirname + "/cv.pdf"
    res.download(file); // Set disposition and send it.
  });
app.get('/contact', function(req, res) {
    res.render("contact.ejs")
});


app.listen(8000)
