import { makeStudent } from './'
import makeFakeStudent from '../../tests/fixtures/student.js'

describe('Student', () => {

    test('must have id', () => {
        const student = makeFakeStudent({ id: undefined })
        expect(() => makeStudent(student)).toThrow('Please provide a valid id.')
    })

    test('must have first name', () => {
        const student = makeFakeStudent({ firstName: undefined })
        expect(() => makeStudent(student)).toThrow('Please provide a valid given name.')
    })
    
    test('must have last name', () => {
        const student = makeFakeStudent({ lastName: undefined })
        expect(() => makeStudent(student)).toThrow('Please provide a valid last name.')
    })

    test('must have date of birth', () => {
        const student = makeFakeStudent({ dateOfBirth: undefined })
        expect(() => makeStudent(student)).toThrow('Please provide a valid date of birth.')
    })

    test('must have enrollment year', () => {
        const student = makeFakeStudent({ enrollmentYear: undefined })
        expect(() => makeStudent(student)).toThrow('Please provide a valid enrollment year.')
    })
})