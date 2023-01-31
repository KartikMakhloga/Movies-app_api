let express = require("express");

//ek naya server bnati hai but ye sirf create krti use chalu nahi krti
let server = express();

//ye line server ko chalu krdeti hai
//ek port pr
server.listen(3000);


// "/" is a path here
server.get("/",function(req,res){
      res.send("hi");
});
server.get("/movies",function(req,res){
      res.send("movies data from server");
});
server.get("/genre",function(req,res){
      res.send("genre data from server");
});
// http://localhost:3000/

