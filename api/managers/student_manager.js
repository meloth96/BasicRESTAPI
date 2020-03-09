const Student = require('../models/student');
const StudentsDAO = require('../daos/dao_students');
const Exceptions = require('../exceptions/exceptions');

class StudentsManager{
  studentsDAO = new StudentsDAO();

  async addStudent(name, code){
    let student;
    let addedStudent;
    try{
      if(name.length > 0 && code > 0){
        student = new Student(name, code);
        addedStudent = await this.studentsDAO.addStudent(student);
      }else{
        addedStudent = false;
      }
    }catch(error){
      if(error instanceof Exceptions.StudentDAOException){
        throw new Exceptions.StudentsManagerException(error.message + error.constructor.name);
      }else{
        throw new Exceptions.StudentsManagerException('An unexpected error ' +
                  'ocurred while adding a student');
      }
    }
    return addedStudent;
  }

  async listStudents(){
    let students;
    try{
      students = await this.studentsDAO.listStudents();
    }catch(error){
      if(error instanceof Exceptions.StudentDAOException){
        throw new Exceptions.StudentsManagerException(error.message + error.constructor.name);
      }else{
        throw new Exceptions.StudentsManagerException('An unexpected error ' +
                  'ocurred while listing students');
      }
    }
    return students;
  }

  async getStudentByID(id){
    let student;
    try{
      student = await this.studentsDAO.getStudentByID(id);
    }catch(error){
      if(error instanceof Exceptions.StudentDAOException){
        throw new Exceptions.StudentsManagerException(error.message + error.constructor.name);
      }else{
        throw new Exceptions.StudentsManagerException('An unexpected error ' +
                  'ocurred while getting student with id ' + id);
      }
    }
    return student;
  }

  async updateStudent(name, code, id){
    let student;
    let updatedStudent;
    try{
      student = await this.getStudentByID(id);
      if(student != undefined){
        student.setName(name);
        student.setCode(code);
        updatedStudent = await this.studentsDAO.updateStudent(student);
      }else{
        updatedStudent = false;
      }
    }catch(error){
      if(error instanceof Exceptions.StudentDAOException){
        throw new Exceptions.StudentsManagerException(error.message + error.constructor.name);
      }else{
        throw new Exceptions.StudentsManagerException('An unexpected error ' +
                  'ocurred while updating student with id ' + id);
      }
    }
    return updatedStudent;
  }

}

module.exports = StudentsManager;
