var mongoose = require("mongoose")
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://saetbyeol:2478chzh@senecaweb.fptssws.mongodb.net/web322_week8")


// var obj= {
//     companyName: "The Kwik-E-Mart",
//     address: "Springfield",
//     phone: "212-842-4923",
//     employeeCount: 3,
//     country: "U.S.A"
// }

var companySchema = new Schema({
    "companyName":  String,
    "address": String,
    "phone": String,
    "employeeCount": {
      "type": Number,
      "default": 0
    },
    "country": String  
  })

  var Company = mongoose.model("companies", companySchema)

  var kwikEMart = new Company({
    companyName: "The Kwik-E-Mart",
    address: "Springfield",
    phone: "212-842-4923",
    employeeCount: 3,
    country: "U.S.A"
  });

// kwikEMart.save().then(()=>{
//     console.log("success!")
// }).catch((err)=>{
//     console.log("error!: " + err)
// })

// Company.find({companyName: "The Kwik-E-Mart"})
// .exec()
// .then((company)=>{
//     console.log(company)
// }).catch((err)=>{
//     console.log(err)
// })

// Company.updateOne(
//     {_id: mongoose.Types.ObjectId('63675540f62f5a25cdb592f4')},
//     { $set: {companyName: "Walmart"}}
// ).exec()
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

Company.deleteOne(
    {_id: mongoose.Types.ObjectId('63675540f62f5a25cdb592f4')},
).exec()
.then((confirmation)=>{
    console.log(confirmation)
}).catch((err)=>{
    console.log(err)
})




var Student = sequelize.define('Student',{

})





  