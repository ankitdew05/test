const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const Contact = require("./db/Contact")
app.use(express.json());
app.use(cors());

app.get("/", (req,resp)=>{
    resp.send("its Woking")
    });


app.post("/contacts", async(req,resp)=>{
    let contacts = new Contact(req.body)
    let result = await contacts.save()
    resp.send(result);
  })

  app.get("/contact",async (req,resp)=>{
    let contacts = await Contact.find();
    if(contacts.length>0){
      resp.send(contacts);
    }
    else{
      resp.send({result: "No result Found"})
    }
  
  })

app.listen(5000);