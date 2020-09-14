const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model('Course');

router.get('/add',(req,res)=>{
    res.render("add")
})

router.post('/add',(req,res)=>{
    console.log(req.body);
    
    var course=new CourseModel()
    course.courseName=req.body.courseName
    course.courseFee=req.body.courseFees
    course.courseDuration=req.body.courseDuration
    course.courseId=Math.ceil(Math.random()*100000)+""
    course.save((err,doc)=>{
        if (!err){
            res.redirect("/course/list");
        }
        else{
            res.send("Error occured");
        }
    })

})


router.delete('/deleteCourse',(req,res)=>{
    console.log(req.body);
    
    CourseModel.deleteOne({ courseId: req.body.courseId }, function (err) {
        if (!err){
            res.send("deleted");
         }
         else{
             res.send("Error occured");
         }
      });

})

router.get('/list',(req,res)=>{
    // var course=new CourseModel();
    // course.courseName="shivam";
    // course.courseId="1";
    // course.save();
    CourseModel.find((err,docs)=> {
        if(!err){
            res.render('list',{data:docs})
        }
        else{
            res.send("Error")
        }
    }).lean()
});

module.exports = router;