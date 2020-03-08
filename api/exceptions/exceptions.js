module.exports = {
  DaoStudentException: class DaoStudentException extends Error{
    constructor(message){
      this.message = message;
    }
  },

  ConnectionException: class ConnectionException extends Error{
    constructor(message){
      this.message = message;
    }
  }
}
