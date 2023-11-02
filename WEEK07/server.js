// const Sequelize=require('sequelize');

// const sequelize = new Sequelize('drnbugun', 'drnbugun', 'FR5mALFZLcat19hiRyH0EnJNm4VmBXkY', {
//     host: 'peanut.db.elephantsql.com',
//     dialect: 'postgres',
//     port: 5432,
//     dialectOptions: {
//         ssl: { rejectUnauthorized: false }
//     },
//     query: { raw: true }
// });

// // sequelize
// //     .authenticate()
// //     .then(function() {
// //         console.log('Connection has been established successfully.');
// //     })
// //     .catch(function(err) {
// //         console.log('Unable to connect to the database:', err);
// //     });


// var Project = sequelize.define('Project', {
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,
// });

// var CustomProject = sequelize.define('CustomProject',{
//     projectID: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,

// }, {
//     createdAt: false,
//     updatedAt: false
// })

// var projectData = {title: 'Project', description: 'First Project'}

// // sequelize.sync().then(() => {


// //     // Project.create(projectData).then((project)=>{
// //     //     console.log(project)
// //     //     console.log("success!")
// //     // }).catch((error)=>{
// //     //     console.log("ERROR!: "+error)
// //     // })
    


// // }).catch((error)=>{
// //     console.log("ERROR!: "+error)
// // })

// var User = sequelize.define('User', {
//     fullName: Sequelize.STRING,
//     title: Sequelize.STRING
// });

// var Task = sequelize.define('Task',{
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT
// });

// User.hasMany(Task)
// // Task.belongsTo(User)

// var userData = {fullName: "Jason Bourne", title: "developer"}

// sequelize.sync().then(()=>{
//     User.create(userData).then((user)=>{
//         console.log("user creation successful!")

//         Task.create({
//             title: "Task 1",
//             description: "dfsd",
//             UserId: user.id

//         }).then(()=>{
//             console.log("task2 creation successful!")
//         }).catch((err)=> console.log(err))

//         Task.create({
//             title: "Task 2",
//             description: "fjksdlfjs",
//             UserId: user.id
//         }).then(()=>console.log("task 2 creation successful!"))
//         .catch((err)=> console.log(err))

//     }).catch((error)=>{
//         console.log(err)
//     })
// })
///////////////////////////////////

const Sequelize = require('sequelize');
//set up sequelize to point to our postgres database
const sequelize = new Sequelize('drnbugun', 'drnbugun', 'FR5mALFZLcat19hiRyH0EnJNm4VmBXkY', {
    host: 'peanut.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

// //define a "Project" model
// var Project = sequelize.define('Project', {
//     project_id:{
//         type: Sequelize.INTEGER,
//         primaryKey: true, // use "project_id" as a primary key
//         autoIncrement: true
//     },
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT
// }, {
//     createdAt: false,//disable createdAt
//     updatedAt: false //disable updatedAt
// });

// sequelize.sync().then(function(){
//     Project.create({
//         title: 'Project1',
//         description:'First Project'
//     }).then(function(project){
//         console.log("success!")
//     }).catch(function(error){
//         console.log("something went wrong!")
//     });
// });


// //model relationship
// //Define our "User" and "Task" models
// var User  = sequelize.define('User', {
//     fullName: Sequelize.STRING,
//     title: Sequelize.STRING
// });
// var Task = sequelize.define('Task',{
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT
// });
// //Associate tasks with user & automatically create a foreign key
// //relationship on 'Task' via an automatically generated 'UserId' field
// // User.hasMany(Task);



// sequelize.sync().then(function(){
//     //create user "Jason Bourne"
//     User.create({
//         fullName: "Jason Bourne",
//         title: "developer"
//     }).then(function(user){
//         console.log("user created");

//         //create "Task 1" for the new user
//         Task.create({
//             title: "Task 1",
//             description: "Task 1 description",
//             UserId: user.id //set the correct Userid foreign key
//         }).then(function(){console.log("Task 1 created")})

//         //create "Task 2" for the new user
//         Task.create({
//             title: "Task 2",
//             description: "Task 2 description",
//             UserId: user.id //set the correct Userid foreign key
//         }).then(function(){console.log("Task 2 created")})
//     });
// });


var Name = sequelize.define('Name', {
    fName: Sequelize.STRING,
    lName: Sequelize.STRING
});

Sequelize.sync().then(function(){
    //return all first names only
    Name.findAll({
        attributes:['fName']
    }).then(function(data){
        console.log("All first names");
        for(var i=0; i<data.length; i++){
            console.log(data[i].fName);
        }
    });

    //return all first names where id == 2
    Name.findAll({
        attributes: ['fName'],
        where: {
            id: 2
        }
    }).then(function(data){
        console.log("All first names where id == 2");
        for(var i=0; i<data.length;i++){
            console.log(data[i].fName);
        }
    });
})


sequelize.sync().then(function () {
    // update User 2's last name to "James"
    // NOTE: this also updates the "updatedAt field"
    Name.update({
        lName: "James"
    }, {
        where: { id: 2 } // only update user with id == 2
    }).then(function () { console.log("successfully updated user 2");});

});


sequelize.sync().then(function(){
    //remove User3 from the database
    Name.destroy({
        where:{id: 3}
    }).then(function(){console.log("successfully removed user3")})
})


