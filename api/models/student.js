class Student{
  constructor(name, code, id = -1){
    this.name = name;
    this.code = code;
    this.id = id;
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setCode(code){
    this.code = code;
  }

  getCode(){
    return this.code;
  }

  setID(id){
    this.id = id;
  }

  getID(){
    return this.id;
  }
}

module.exports = Student;
