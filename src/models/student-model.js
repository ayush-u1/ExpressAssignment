const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const studentDetails = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  course: { type: String, required: true },
  department:{type:String},
  isDelete: { type: Boolean, default: false },
  phoneNum: { type: Number },

  gender: { type: String,
          enum: [ "M", "F" ]
    },
  address:{type:String}
});

//exporting the 
const stu = mongoose.model('studentdata', studentDetails, 'studentdata');
module.exports = stu;