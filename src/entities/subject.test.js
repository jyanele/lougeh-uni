import { makeSubject } from './'

describe('Add Subject', () => {
    test('must have a valid id', () => {
        const data = {
            name: 'Data Structures',
            credits: 3,
            yearStarted: 2022
        }

        expect(() => makeSubject(data).toThrow('Please prvide a valid id.'))
    })
    test('must have a valid name', () => {
        const data = {
            name: undefined,
            credits: 3,
            yearStarted: 2022
        }

        expect(() => makeSubject(data).toThrow('Please prvide a valid name.'))
    })
    test('must have a valid credit point', () => {
        const data = {
            name: 'Data Structures',
            credits: undefined,
            yearStarted: 2022
        }

        expect(() => makeSubject(data).toThrow('Please provide a valid credit value.'))
    })
    test('must have a valid starting year', () => {
        const data = {
            name: 'Data Structures',
            credits: 3,
            yearStarted: undefined
        }

        expect(() => makeSubject(data).toThrow('Please provide a valid year when the subject started.'))
    })
})