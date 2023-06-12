import createSubject from './subject.js'
import createCourse from './course.js'
import createStudent from './student.js'

import Id from '../Id/index.js'

const makeCourse = createCourse({ Id })
const makeSubject = createSubject({ Id })
const makeStudent = createStudent({ Id })

module.exports = {
    makeCourse,
    makeSubject,
    makeStudent
}