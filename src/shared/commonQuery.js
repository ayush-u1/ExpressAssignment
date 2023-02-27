class commonQuery{
    addStuData(model, vals) {
        return new Promise((resolve, reject) => {
            console.log("-------------------------------- INSIDE TRY IN COMMONQUERY")
            model.create(vals, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
    getStuData(model,cond)
    {
        //let cond = vals.isDelete;
        console.log(cond)
        return new Promise((resolve, reject) => {
            model.find(cond, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
        });
        });
    }
    getStuDataByCourse(model, cond) {
        return new Promise((resolve, reject) => {
            model.find(cond, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
        });
        });
    }

    updateStuAddress(model,cond,toUpdate) {
        console.log(cond);
        return new Promise((resolve, reject) => {
           model.updateOne(cond,toUpdate.body,(err, data) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(data)
                    resolve(data);
                }
        });
        });
    }
    deleteStudentSoft(model,cond) {
        console.log(cond);
        return new Promise((resolve, reject) => {
           model.updateOne(cond,{isDelete:true},(err, data) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(data)
                    resolve(data);
                }
        });
        });
    }
}
exports.Query  = new commonQuery()