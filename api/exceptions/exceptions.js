module.exports = {
  StudentDAOException: class StudentDAOException extends Error{
    constructor(message){
      super(message);
      this.message = message;
    }
  },

  ConnectionException: class ConnectionException extends Error{
    constructor(message){
      super(message);
      this.message = message;
    }
  }
}
