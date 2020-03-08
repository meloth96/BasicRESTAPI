const {Pool} = require('pg');
const Exceptions = require('../exceptions/exceptions');

class DBConnector{
  static pool = new Pool({
    user: 'restful',
    host: 'localhost',
    database: 'school',
    password: 'restful'
  });

  static async getConnection(){
    let connection;
    try{
      connection = await this.pool.connect();
    }catch(error){
      connection.release();
      throw new Exceptions.ConnectorException('Could not retrieve a client connection from pool');
    }
    return connection;
  }

  static closeConnection(connection){
    connection.release();
  }
}

module.exports = DBConnector;
