 const express = require("express");
 const https = require("https");
 const bodyParser = require("body-parser");
 const mailchimp = require("mailchimp-marketing");
 const request = require("request");
const { url } = require("inspector");
const { response } = require("express");
 const app=express();
//  const port =3000;
 app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended:true}));
 app.get("/",function(req,res){
     res.sendFile(__dirname+"/signup.html");
 })
 mailchimp.setConfig({
    apiKey: "e17d85080f1a03a417bfa4972ff86c1e-us10",
    server: "us10",
  });
 
 app.post("/",function(req,res){
     var name = req.body.name;
     var email = req.body.email;
      console.log(name);
      console.log(email);
      console.log(res.statusCode);
       if(response.statusCode==200)
       {
        res.sendFile(__dirname+"/success.html");
        console.log(res.statusCode);
        // jndm
        const addmember = async () => {
            const response = await mailchimp.lists.addListMember("e5770461d8", {
            email_address: "isjnnnnjnewe@gmail.com",
            status: "subscribed",
     
          });
          console.log(response);
        };
       //addmember();
    //    njnk
       }
       else{
        res.sendFile(__dirname+"/faiuer.html");
        console.log(res.statusCode);
       }
 })
   








  app.listen(process.env.PORT || 3000,function()
  {
      console.log("Server running on port 3000");
  });






      
   






// api key
// e17d85080f1a03a417bfa4972ff86c1e-us10

// list id
// e5770461d8

