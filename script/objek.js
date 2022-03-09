// Javascript Lanjutan (Advanced Javascript)
// OBJECT (Object.create())


// 1. Object Literal
let student1 = {
  name  : 'erik',
  skill : 'html, css, js',
  learn : function (subject) {
    this.skill += `, ${subject}`
    console.log(`${this.skill}`)
  }
} 

let student2 = {
  name  : 'tom',
  skill : 'c, php',
  learn : function (subject) {
    this.skill += `, ${subject}`
    console.log(`${this.skill}`)
  }
} 



// 4. Object.create()
const methodStudent = {
  learn : function(subject) {
    this.skill += `, ${subject}`
    console.log(`${this.skill}`)
  }
}

function Student(id, name, skill) {
  let student   = Object.create(methodStudent);
  student.id    = id;
  student.name  = name;
  student.skill = skill;

  return student;
}

let student3 = Student(2022030411, 'iva', 'css')
let student4 = Student(2022030419, 'paul', 'laravel')



// 3. Constructor Function
function Scholar(id, name, skill) {
  this.id    = id;
  this.name  = name;
  this.skill = skill;

  this.learn = function(subject) {
    this.skill += `, ${subject}`
    console.log(`${this.skill}`)
  }
}

let student5 = new Scholar(2022030419, 'rick', 'react')