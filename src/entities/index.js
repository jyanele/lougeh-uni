import createSubject from './subject.js'
import createCourse from './course.js'
import createStudent from './student.js'

const makeCourse = createCourse()
const makeSubject = createSubject()
const makeStudent = createStudent()

module.exports = {
    makeCourse,
    makeSubject,
    makeStudent
}