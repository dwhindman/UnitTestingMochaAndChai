// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const expect = require("chai").expect;

describe("findStudentScoreByName", () =>{
    it("should return the score associated with a student name", () =>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2},
        ];
        const expected = students[0].score;
        const name = students.name;
        const actual = findStudentScoreByName(students, name);
        expect(actual).to.equal(expected);
        
    });
  it("should return null if student name doesn't exist", () =>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2},
        ];
        const name = !students.name;
        const actual = findStudentScoreByName(students, name);
        expect(actual).to.equal(null);
        
    });
});