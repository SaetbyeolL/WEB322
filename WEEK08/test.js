(a)
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
Student.belongsTo(College);

(b)
sequelize.sync().then(() => {
    Student.findAll({
    attributes: ['name'],
    where: {
    collegeID: 1
    }
    }).then((data) => {
    for(var i = 0; i < data.length; i++){
    console.log(data[i].name)
    }
    })
});

///////////////////

senecaCollege.save().then(() => {
    console.log(senecaCollege);
  }).catch(err => {
    console.log(err);
  })
  .process.exit();
});
College.updateOne(
    { name: "Seneca College"},
    { $set: { studentCount: 150000 }})
    .exec()
    .then((data) => {
    console.log(data.studentCount);
    })
    .catch((err)=>{
        console.log(err);
    });



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