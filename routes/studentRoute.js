const express = require("express");
const router = express.Router();
const {createStudent,getAllStudents,getStudent,updateStudent,deleteStudent}= require("../controllers/studentController");

//Create Student
router.post("/student"       , createStudent);
//Get All Students
router.get("/student"        , getAllStudents);
//Update  Student record 
router.get("/student/:id"    , getStudent);
router.put("/student/:id"    , updateStudent);
//Delete  Student
router.delete("/student/:id" , deleteStudent);
module.exports = router;