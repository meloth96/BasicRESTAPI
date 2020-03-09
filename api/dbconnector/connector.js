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
      throw new Exceptions.ConnectionException('Could not retrieve a client connection from pool');
    }
    return connection;
  }

  static async executeQuery(query){
    let result;
    try{
      result = await this.pool.query(query, queryParameters);
    }catch(error){
      throw new Exceptions.ConnectionException('An error ocurred while executing query to DB');
    }
    return result;
  }

  static closeConnection(connection){
    connection.release();
  }

  static getConnectionCount(){
    return this.pool.totalCount;
  }
}

module.exports = DBConnector;
