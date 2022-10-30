 const express = require("express");
 const https = require("https");
 const bodyParser = require("body-parser");
 const mailchimp = require("mailchimp-marketing");
 const request = require("request");
const { url } = require("inspector");
const { response } = require("express");
 const appp=express();
 var fv=('fireebase')
// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
var apiIni =fb.initializeApp({
  apiKey: "AIzaSyDaWyw3pQMZclCUEwWU_DYjt7gDmXP0Xp4",
  authDomain: "nikhilsharma-e1248.firebaseapp.com",
  projectId: "nikhilsharma-e1248",
  storageBucket: "nikhilsharma-e1248.appspot.com",
  messagingSenderId: "533635628693",
  appId: "1:533635628693:web:ab062802a0119a4722e59c",
  measurementId: "G-WPPYCYCY39"
})




























 appp.use('view engine','ejs');
//  const port =3000;
 appp.use(express.static("public"));
 appp.use(bodyParser.urlencoded({extended:true}));
 appp.get("/",function(req,res){
     res.sendFile(__dirname+"/signup.html");
 })
 mailchimp.setConfig({
    apiKey: "e17d85080f1a03a417bfa4972ff86c1e-us10",
    server: "us10",
  });
 
 appp.post("/",function(req,res){
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
        // const addmember = async () => {
        //     const response = await mailchimp.lists.addListMember("e5770461d8", {
        //     email_address: "isjnnnnjnewe@gmail.com",
        //     status: "subscribed",
     
        //   });
        //   console.log(response);
        // };
       //addmember();
    //    njnk
       }
       else{
        res.sendFile(__dirname+"/faiuer.html");
        console.log(res.statusCode);
       }
 })
   
 






  appp.listen(process.env.PORT || 3000,function()
  {
      console.log("Server running on port 3000");
  });






      
   






// api key
// e17d85080f1a03a417bfa4972ff86c1e-us10

// list id
// e5770461d8

