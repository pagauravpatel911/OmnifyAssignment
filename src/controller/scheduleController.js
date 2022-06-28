const scheduleModel = require("../Model/scheduleSchema")

const jwt = require("jsonwebtoken")
const validator = require('../validator/validator');
const moment = require("moment")



async function createSchedule(req,res){
    try{
        const body = req.body;
        
        const query = req.query;
        if(validator.isValidBody(query)) {
            return res.status(400).send({ status: false, msg: "Invalid parameters"});
        }

        const {userId,bookDate,name,discription,startTime,endTime,weekDay} = body;

        if (!validator.isValidBody(body)) {
            return res.status(400).send({ status: false, msg: "User body should not be empty" });
        }

        if(!(validator.isValid(userId) && validator.isValidobjectId(userId))) {
            return res.status(400).send({status: false, msg: "BookId not valid"})
        }
        // if(!validator.isValidDate(bookDate)) {
        //     return res.status(400).send({ status: false, message: "Validation of reviewedAt is required"})
        // }
        if (!validator.isValid(name)) {
            return res.status(400).send({ status: false, msg: "User name is required" });
        }


       

//let weekday = bookDate
var addNDays = function (days, day, weekday) {
    const days1 = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var date = new Date(weekday);
    let index = days1.indexOf(day)
    date.setDate(date.getDate() + days);
    if (date.getDay() == index) {
        return date;
    }
    return 0;
}

let arr = []
for (let i = 1; i <= 90; i++){
    let date = addNDays(i, weekDay, bookDate)
    if (date) {

         date = date.getDate()+"-"+ date.toLocaleString('default', { month: 'long' })+"-"+ date.getFullYear()
           arr.push(date)
    }
}


  const schedule = {
    ...body,
    schelule: arr
}
    

  const  createSchedule = await scheduleModel.create(schedule)

   return res.status(200).send({msg:"Slot created Succsesfully",data:createSchedule.schelule})






    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}


module.exports.createSchedule = createSchedule


