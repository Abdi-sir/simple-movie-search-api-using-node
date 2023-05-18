//import the package
let express = require("express");
let app = express();
let request = require("request");
app.use(express.static('public'));
//allow ejs file view engines
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
//request search for app ,we do using   api
app.get("/search",(req,res)=>{
    var search = JSON.stringify(req.query.name) ;
    var url = "http://www.omdbapi.com/?i=tt3896198&apikey=97b8b17d&s="+search;
    console.log(url);
    request(url,(error,response,body)=> {
        if((!error) && (response.statusCode == 200)){
             let data = JSON.parse(body);
         res.render("list",{data:data});
        }else{
            console.log("err",error)
        }
     // Print the HTML for the Google homepage.
      });
    
})





//creating the server locally
app.listen(3000,()=>{
console.log("movies app start!!!")
})