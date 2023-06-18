import db from '../data-access/db'
import * as courses from '../course.json'
import * as subjects from './subject.json'
import * as students from './student.json'

const courseDb = db(courses)
const subjectsDb = db(subjects)
const studentsDb = db(students)

const database = Object.freeze({
    courseDb,
    studentsDb,
    subjectsDb
})

export default database
export {
    courseDb,
    studentsDb,
    subjectsDb
}