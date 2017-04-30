/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
	var studID = 0;
  var Course = {
		init: function(title, presentations) {
      this.title = title;
      this.presentations = presentations;
      this.students = [];
      if (presentations.length < 1){
        throw 'No presentations in the course';
      }
      if ((/^\s/).test(title) || (/\s$/).test(title)){
          throw 'Title cannot begin or end with space';
      } 
      for (let i = 0; i < presentations.length; i+=1){
         if (presentations[i].length === 0){
          throw 'Title is empty string';
        }
        if (presentations[i].search(/  /) > -1){
          throw 'Consecutive spaces';
        }
      }
      return this;
		},
		addStudent: function(name) {
      let names = name.split(' ');
      if (typeof name !== 'string'){
        throw 'Student name must be a string';
      }
      if (names.length !== 2){
        throw 'Student must have exactly 2 names';
      }
      for (let i = 0; i < names.length; i += 1)
      {
        if ((/^[^A-Z]/).test(names[i])){
          throw 'Names must start with capital letter';
        }
      }
      studID += 1;
      var student = {
        firstname: names[0],
        lastname: names[1],
        id: studID
      };
      this.students.push(student);
      return studID;
		},
		getAllStudents: function() {
      return this.students;
		},
		submitHomework: function(studentID, homeworkID) {
      if (studentID < 1 || studentID % 1 !== 0 || studentID > studID){
        throw 'Invalid Student ID';
      }
      if (homeworkID < 1 || homeworkID % 1 !== 0 || homeworkID > this.presentations.length){
        throw 'Invalid Homework ID';
      } 
		},
		pushExamResults: function(results) {
      for(let i = 0; i < results.length; i += 1){
        if(results[i].score === 'unidentified'){
          throw '';
        }
      }
		},
		getTopStudents: function() {
		}
	};

	return Course;
}


module.exports = solve;
