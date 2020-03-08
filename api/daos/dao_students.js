const DBConnector = require('../dbconnector/dbconnector');
const Exceptions = require('../exceptions/exceptions');
const Student = require('../models/student');

class StudentsDAO{

  addStudent(student){
    let connection;
    let addedStudent;
    let result;
    try{
      connection = await DBConnector.getConnection();
      result = await connection.query('INSERT INTO "REST".students ' +
                  '(name, code) values($1, $2)', [student.name, student.code]);
      addedStudent = result.rowCount == 1;
    }catch(error){
      if(error instanceof Exceptions.ConnectionException){
        throw new StudentDAOException(error.message);
      }else{
        throw new StudentDAOException('An error ocurred while adding ' +
                  'student ' + student.name + ' to DB.' + error.message);
      }
    }
    finally{
      DBConnector.closeConnection(connection);
    }
    return addedStudent;
  }

  listStudents(){
    let connection;
    let students;
    try{
      connection = DBConnector.getConnection();
      result = await connection.query('SELECT * FROM "REST".students');
      if(result.rowCount > 0){
        students = [];
        result.rows.forEach((student) => {
          students.push(new Student(student.name, student.code));
        });
      }else{
        students = undefined;
      }
    }catch(error){
      if(error instanceof Exceptions.ConnectionException){
        throw new StudentDAOException(error.message);
      }else{
        throw new StudentDAOException('An error ocurred while listing ' +
                  'students from DB' + error.message);
      }
    }finally{
      DBConnector.closeConnection(connection);
    }
    return students;
  }

  getStudentByID(id){
    let connection;
    let student;
    try{
      connection = DBConnector.getConnection();
      result = await connection.query('SELECT * FROM "REST".students WHERE ' +
                  'id = $1', [id]);
      if(result.rowCount == 1){
        student = result.rows[0];
        student = new Student(student.name, student.code);
      }else{
        student = undefined;
      }
    }catch(error){
      if(error instanceof Exceptions.ConnectionException){
        throw new StudentDAOException(error.message);
      }else{
        throw new StudentDAOException('An error ocurred while getting ' +
                  'student with id ' + id + ' from DB' + error.message);
      }
    }finally{
      DBConnector.closeConnection(connection);
    }
    return student;
  }
}