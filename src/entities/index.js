import createSubject from './subject.js'
import createCourse from './course.js'
import Id from '../Id/index.js'

const makeCourse = createCourse({ Id })
const makeSubject = createSubject({ Id })

module.exports = {
    makeCourse,
    makeSubject
}