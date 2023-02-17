/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/
function findStudentScoreByName(students, name) {

  for(let i = 0; i < students.length; i++){
    if(name === students.name){
      let score = students[i].score;
      
      return score;
    }else{
      
      return null;
    }
  }
}

module.exports = findStudentScoreByName;