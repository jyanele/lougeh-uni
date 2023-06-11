import makeCourse from '../entities/index.js'

describe('Course', () => {
    test('must have a name', () => {
        const data = {
            id: 1,
            name: undefined,
            requiredCreditPoints: 12,
            yearStarted: 2021
        }

        expect(() => makeCourse(data).toThrow('Please provide a valid name.'))
    })

    test('must have a course identifier', () => {
        const data = {
            id: undefined,
            name: 'Information Technology',
            requiredCreditPoints: 12,
            yearStarted: 2021
        }

        expect(() => makeCourse(data).toThrow('Please provide a valid id.'))
    })

    test('must have credit points', () => {
        const data = {
            id: 1,
            name: 'Information Technology',
            requiredCreditPoints: undefined,
            yearStarted: 2021
        }

        expect(() => makeCourse(data).toThrow('Please provide a valid credit point.'))
    })

    test('must have year started', () => {
        const data = {
            id: 1,
            name: 'Information Technology',
            requiredCreditPoints: undefined,
            yearStarted: undefined
        }

        expect(() => makeCourse(data).toThrow('Please provide a valid year.'))
    })
})