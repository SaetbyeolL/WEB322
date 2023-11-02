// Assume that the mongoose connection has already been made (do not
//     include/import this connection in your code)
//     Given the following mongoose schema for a college:
var collegeSchema = new Schema({
    "name": {
    type: String,
    unique: true
    },
    "address": String,
    "studentCount": {
    "type": Number,
    "default": 0
    },
});
var College = mongoose.model("web322_collection", collegeSchema);

// you are given a new college object as follows:
    var senecaCollege = new College({
    name: "Seneca College",
    address: "1750 Finch Ave. East Toronto, Ont. M2J 2X5",
    studentCount: 100000,
    })
    // Use the "senecaCollege" object to perform Mongoose CRUD operations: save and
    // updateOne.
    // Once saved to the collection, update the document's studentCount to 150000 and
    // then console.log the updated count.

    senecaCollege.save((err) => {
        if(err) {
        console.log(err);
        } else {
        console.log(senecaCollege);
        }
        process.exit();
        });
        College.updateOne(
        { name: "Seneca College"},
        { $set: { studentCount: 150000 }
        }
        ).exec().then((college) => {
        console.log(college.studentCount)
        });

////////////////////////
// 2 Part Sequilize Question
// Assuming postgres is connected (No need to include that part of the code)
// A) Define a sequilize model for 2 labels: Student and College. Make sure that
// you defined the primary key as studentId and collegeId. Use a
// sequilize association/relationship to the link the 2 labels.(students belong to
// college) The columns are as follow:
// Student:
//  studentID
//  name
//  semester
//  program
// College:
//  collegeID
//  name
//  city
// B) Use a sequalize CRUD operation to find all students in Seneca college
// (collegeID) and then console.log each student's name.

var Student = sequelize.define('Student', {
    studentID: {
    type: Sequelize.INTEGER,
    primaryKey: true, 
    autoIncrement: true 
    },
    name: Sequelize.STRING,
    semester: Sequelize.STRING,
    program: Sequelize.STRING
    });
    var College = sequelize.define('College', {
    collegeID: {
    type: Sequelize.INTEGER,
    primaryKey: true, 
    autoIncrement: true 
    },
    name: Sequelize.STRING,
    city: Sequelize.STRING
    });
    Student.belongsTo(College, {foreignKey: 'collegeID'})

    sequelize.sync().then(() => {
    Student.findAll({
    where: {
    collegeID: 1
    }
    }).then((students) => {
    for(var i = 0; i < students.length; i++){
    console.log(students[i].name)
}
})
})