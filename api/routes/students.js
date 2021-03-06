const express = require('express');
const router = express.Router();
const Exceptions = require('../exceptions/exceptions');
const StudentsManager = require('../managers/student_manager');
const studentsManager = new StudentsManager();

router.get('/', async (req, res, next) => {
  let students;
  try{
    students = await studentsManager.listStudents();
    res.status(200).json(students);
  }catch(error){
    if(error instanceof Exceptions.StudentsManagerException){
      res.status(500).json();
    }else{
      res.status(500).json();
    }
  }
});

router.get('/:idStudent', async (req, res, next) => {
  let student;
  try{
    student = await studentsManager.getStudentByID(req.params.idStudent);
    if(student != undefined){
      res.status(200).json(student);
    }else{
      res.status(404).json();
    }
  }catch(error){
    if(error instanceof Exceptions.StudentsManagerException){
      res.status(500).json();
    }else{
      res.status(500).json();
    }
  }
});

router.post('/', async (req, res, next) => {
  try{
    if(await studentsManager.addStudent(req.body.name, req.body.code)){
      res.status(201).json();
    }else{
      res.status(500).json();
    }
  }catch(error){
    console.log(error);
    if(error instanceof Exceptions.StudentsManagerException){
      res.status(500).json(error);
    }else{
      console.log(error);
    }
  }
});

module.exports = router;
