const stuModel = require('../models/student-model')
const Cquery = require('../shared/commonQuery')
class studentController{
    async addStudent(req, res) {
       console.log("-----------controller "+req.body)
        //promise
        return new Promise(async (resolve, reject) => {
            try {
                console.log("-------------------------------- INSIDE TRY IN CONTROLLER")
                let stuData = req.body
                 //console.log("-------------------------------- INSIDE TRY IN CONTROLLER REQ BODY "+ req.body)
                let val = await Cquery.Query.addStuData(stuModel, stuData)
                 console.log("-------------------------------- INSIDE TRY IN CONTROLLER REQ BODY "+ val)
                if (val)
                {
                     console.log("-------------------------------- INSIDE TRY IN CONTROLLER val "+ val)
                   return resolve({status:200,val:val}) 
                }
                else {
                    return reject({status:404, error:"Enter Valid Details"})
                }    
            }
            catch (err)
            {
                return reject({status:500,error:"ERROR!!!"})
            }
        })
    }

    
    async getAll(req, res) {
       // console.log("-----------controller "+req.body)
        return new Promise(async (resolve, reject) => {
            try {
                console.log("-------------------------------- INSIDE TRY IN CONTROLLER")
                let data = await Cquery.Query.getStuData(stuModel, {isDelete:false})
                console.log("val in controller >>>>>>>>>>>>>>"+data)
                if (data.length != 0) {
                    return resolve({ status: 200, data: data });
                }
                else {
                    return reject(({ status: 404, error: "Profile Not Found" }));
                }
            }
            catch (e) {
                return reject(({ status: 500, error: "Something Went Wrong" }));
            }
        
        });

    };
    async getByCourse(req, res)
    {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("-------------------------------- INSIDE TRY IN CONTROLLER")
                let data = await Cquery.Query.getStuDataByCourse(stuModel, {course:req.params.course,isDelete:false})
                console.log("val in controller >>>>>>>>>>>>>>"+data)
                if (data.length != 0) {
                    return resolve({ status: 200, data: data });
                }
                else {
                    return reject(({ status: 404, error: "Profile Not Found" }));
                }
            }
            catch (e) {
                return reject(({ status: 500, error: "Something Went Wrong" }));
            }
        
        });
    }
    async updateAddress(req, res)
    {
        
        return new Promise(async (resolve, reject) => {
            try {
                console.log("-------------------------------- INSIDE TRY IN CONTROLLER")
                 console.log(req.params)
                console.log(req.body)
               
                let val = req.body.address;
                console.log(val)
                let data = await Cquery.Query.updateStuAddress(stuModel,{_id:req.params.id },req)
                console.log(data)
                if (data.length != 0) {
                    return resolve({ status: 200, data: data });
                }
                else {
                    return reject(({ status: 404, error: "Profile Not Found" }));
                }
            }
            catch (e) {
                return reject(({ status: 500, error: "Something Went Wrong",reason:e }));
            }
        
        });
    }
    async deleteStudent(req,res){
        
        return new Promise(async (resolve, reject) => {
            try {
                console.log("-------------------------------- INSIDE TRY IN CONTROLLER")
                 console.log(req.params)
                console.log(req.body)
               
                let val = req.body.address;
                console.log(val)
                let data = await Cquery.Query.deleteStudentSoft(stuModel,{_id:req.params.id })
                console.log(data)
                if (data.length != 0) {
                    return resolve({ status: 200, data: data });
                }
                else {
                    return reject(({ status: 404, error: "Profile Not Found" }));
                }
            }
            catch (e) {
                return reject(({ status: 500, error: "Something Went Wrong",reason:e }));
            }
        
        });
    }
    
}
module.exports = new studentController()