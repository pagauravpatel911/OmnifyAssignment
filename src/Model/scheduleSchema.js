const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const scheduleSchema  = new mongoose.Schema({

    userId: {
        type: ObjectId,
        required: true,
        ref: "newUser",
      },
       bookDate:{
          type:Date,
          require : true,
          default: Date.now(),
       },
      name:{
        type:String,
        required:true
      },
      discription:{
        type: String,
        require:true
      },
      startTime:{
        type:String,
        required:true
      },
      endTime:{
        type:String,
        required:true
      },
      weekDay:{
        type:String,
        required:true
      },
      schelule:{
        type: [String]
      }




})

module.exports = mongoose.model('schedule', scheduleSchema)