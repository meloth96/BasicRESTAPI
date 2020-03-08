class Student{
  constructor(name, code){
    this.name = name;
    this.code = code;
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
}

module.exports = Student;
