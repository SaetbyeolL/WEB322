// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
// var companySchema = new Schema({
//     "companyName": String,
//     "address":String,
//     "employeeCount":{
//         "type":Number,
//         "default":0
//     },
//     "country":String
// });
// var Company = mongoose.model("web322_companies", companySchema);

// const { Schema, Query, set } = require('mongoose');


// //require mongoose and setup the Schema
// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// //connect to your mongoDB Atlas Database
// mongoose.connect("mongodb+srv://saetbyeol:2478chzh@senecaweb.fptssws.mongodb.net/web322_week8");

// //define the company schema
// var companySchema = new Schema({
//     "companyName":String,
//     "address":String,
//     "phone":String,
//     "employeeCount":{
//         "type":Number,
//         "default":0
//     },
//     "country":String
// });
// //register the company model using the companySchema
// //use the web322_companies collection in the db to store documents
// var Company = mongoose.model("web322_companies", companySchema);

// //create a new company
// var kwikEMart = new Company({
//     companyName: "The Kwik-E-Mart",
//     address: "Springfield",
//     phone: "212-842-4923",
//     employeeCount: 3,
//     country:"U.S.A"
// });

// //save the company
// kwikEMart.save().then(()=>{
//     console.log("The Kwik-E-Mart company was saved to the web322_companies collection");
// }).catch(err=>{
//     console.log("There was an error saving the Kwik-E-Mart company");
// })



// //save the company
// kwikEMart.save().then(()=>{
//     console.log("The kwik-E-Mart company was saved to the web322_companies collection!");
//     Company.findOne({companyName:"The kwik-E-Mart"})
//     .exec()
//     .then((company)=>{
//         if(!company){
//             console.log("No company could be found");
//         } else{
//             console.log(company);
//         }
//         //exit the program after saving and finding
//         process.exit();
//     })
//     .catch((err)=>{
//         console.log(`There was an error: ${err}`);
//     });
// }).catch(err=>{
//     console.log("There was an error saving the kwik-E-Mart company");
// });


// const commentSchema = new Schema({
//     comment: String,
//     author: String,
//     date: Date
// });
// commentSchema.add({comments:[commentSchema]});


// var commentChain = new Comment({
//     comment: "Star Wars is awesome",
//     author: "Author 1",
//     date: new Date(),
//     comments: [{
//         comment: "I agree",
//         author: "Author 2",
//         date: new Date(),
//         comments: [{
//             comment: "I agree with Author 2",
//             author: "Author 3",
//             date: new Date(),
//             comments: []
//         }]
//     }]
// })



// let pass1 = encodeURIComponent("pa$world1");//this step is needed if there are special characters in your password, ie "$"
// let db1 = mongoose.createConnection(`mongodb+srv://dbUser:${pass1}@cluster0.0abc1.mongodb.net/db1?retryWrites=true&w=majority`);

// //verify the db1 connection
// db1.on('error',(err)=>{
//     console.log("db1 error!");
// });
// db1.once('open',()=>{
//     console.log("db1 success!");
// })

// let pass2 = encodeURIComponent("pa$$word2"); // this step is needed if there are special characters in your password, ie "$"
// let db2 = mongoose.createConnection(`mongodb+srv://dbUser:${pass2}@cluster0.2def3.mongodb.net/db2?retryWrites=true&w=majority`);

// var model1 = db1.model("model1", model1Schema);
// var model2 = db2.model("model2", model2Schema);

// let db1 = mongoose.createConnection("Your connection string here", {useNewUrlParser: true, useUnifiedTopology: true});


// var kwikEMart = new Company({...});

// kwikEMart.save().then(()=>{
//     console.log(kwikEMart);
// }).catch(err=>{
//     console.log(err);
// })


// Company.find({companyName: "The Kwik-E-Mart"})
// .exec()
// .then((companies)=>{
//     companies = companies.map(value=>value.toObject());
// })


// Company.find({ companyName: "The Kwik-E-Mart"}, "address phone")
// .exec()
// .then((companies)=>{
//     companies = companies.map(value=>value.toObject());
// })


//can also use updateMany to update multiple documents at once
// Company.updateOne(
//     {...Query...},
//     {$set:{..field to set...}}
// ).exec();

// Company.updateOne(
//     { companyName: "The Kwik-E-Mart"},
//     { $set:{employeeCount:3}}
// ).exec();


// Company.deleteOne({..query})
// .exec()
// .then();

// Company.deleteOne({ companyName: "The Kwik-E-Mart" })
// .exec()
// .then(()=>{
//     console.log("removed company");
// })
// .catch((err)=>{
//     console.log(err);
// })



// //require mongoose and setup the schema
// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// //connect to your mongoDB Atlass Database
// mongoose.connect("내 데이터베이스주소");

// //define the company schema
// var companySchema = new Schema({
//     "companyName":{
//         type: String,
//         unique:true
//     },
//     "address":String,
//     "phone":String,
//     "employeeCount":{
//         "type":Number,
//         "default":0
//     },
//     "country":String
// });
// var Company = mongoose.model("web322_companies", companySchema);

// //create a new company
// var kwikEMart = new Company({
//     companyName: "The Kwik-E-Mart",
//     address:"Springfield",
//     phone: "212-842-4823",
//     employeeCount: 3,
//     country: "U.S.A"
// });

// //save the company
// kwikEMart.save().then(()=>{
//     console.log("The Kwik-E-Mart company was saved to the web322_companies collection");
//     Company.find({companyName: "The Kwik-E-Mart"})
//     .exec()
//     .then((company)=>{
//         if(!company){
//             console.log("No company could be found");
//         } else{
//             console.log(company)
//         }
//     })
//     .catch((err)=>{
//         console.log(`There was an error: ${err}`);
//     });
// }).catch(err=>{
//     console.log(`There was an error saving the Kwik-E-Mart company: ${err}`);
// })














