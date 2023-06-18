import { makeCourse } from './'
import makeFakeCourse from '../../tests/fixtures/course'

describe('Course', () => {
    test('must have a name', () => {
        const course = makeFakeCourse({ name: undefined })
        expect(() => makeCourse(course).toThrow('Please provide a valid name.'))
    })

    test('must have credit points', () => {
        const course = makeFakeCourse({ totalCredits: undefined })
        expect(() => makeCourse(course).toThrow('Please provide a valid credit point.'))
    })

    test('must have year started', () => {
        const course = makeFakeCourse({ yearCommenced: undefined })
        expect(() => makeCourse(course).toThrow('Please provide a valid year.'))
    })
})