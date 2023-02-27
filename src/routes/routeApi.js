const express = require('express');
stuController = require('../controller/stuController')

const router = express.Router();
  

router.post("/addStudent", (req, res) => {
    console.log("==========================")
     console.log("-------------------------------- INSIDE TRY IN ROUTEAPI REQ BODY "+ req.body)
   stuController.addStudent(req, res).then((data)=>{
    return res.send(data)
   }).catch((error) =>{
    res.send(error)
   })
        
});

// router.get("/getDetailsStudents", (req, res) => {
//   console.log(req.body)
//   console.log("IN RouteAPI")
//    stuController.getAll(req, res).then((data) => {
//    console.log("IN RouteAPI data "+data)
//    return res.send({data)
//   }).catch((error) =>{
//    res.send(error)
//   })
       
// });
router.get("/getDetails", (req, res) => {
    console.log("Route __________________ "+req)
  stuController.getAll(req, res).then((data)=>{
   return res.send(data)
  }).catch((error) =>{
   res.send(error)
  })
       
})

router.get("/getDetails/:course", (req, res) => {
console.log("Route __________________ "+req)
  stuController.getByCourse(req, res).then((data)=>{
   return res.send(data)
  }).catch((error) =>{
   res.send(error)
  })
       
})

router.put("/updateAddress/:id",(req,res)=>{
   stuController.updateAddress(req, res).then((data)=>{
   return res.send(data)
  }).catch((error) =>{
   res.send(error)
  })
})

router.delete("/softDeleteStudent/:id",(req,res)=>{
   stuController.deleteStudent(req, res).then((data)=>{
   return res.send(data)
  }).catch((error) =>{
   res.send(error)
  })
})
module.exports = router
