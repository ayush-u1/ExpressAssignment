const express = require('express');

//importing mongodb so we can connect with db
const connect = require('./shared/mongodb');

//bodyParser is used to get data from api
const bodyParser = require('body-parser');

//simply to use the method used in controller we imported
const stuController = require('./controller/stuController')

const route = require('./routes/routeApi')
 //console.log("Startedddddd>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
class Connectivity{
    //starting server 
    
    activate = () => {
        console.log("Startedddddd>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        const HOST = 'localhost'
        const PORT = 3000
       
        const app = express()
            
        //connecting......
        connect.connectDb()
        app.use(bodyParser.json());


         //creating route
      
        //method -1 using routes
         app.use('/',route)

         //method-2 inside file
        //  app.post("/addStudent", (req, res) => {
        //   stuController.addStudent(req, res).then((data)=>{
        //         return res.send(data)
        //     }).catch((error) =>{
        //         res.send(error)
        //     })
        // });

        app.listen(PORT, () => {
            console.log(`Running on http://${HOST}:${PORT}`);
        });  
    }
}

module.exports = new Connectivity()