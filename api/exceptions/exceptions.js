module.exports = {
  StudentDAOException: class StudentDAOException extends Error{
    constructor(message, errorCode){
      super(message);
      this.message = message;
      this,errorCode = errorCode;
    }
  },

  ConnectionException: class ConnectionException extends Error{
    constructor(message, errorCode){
      super(message);
      this.message = message;
      this.errorCode = errorCode;
    }
  },

  StudentsManagerException: class StudentsManagerException extends Error{
    constructor(message, errorCode){
      super(message);
      this.message = message;
      this.errorCode = errorCode;
    }
  }
}
