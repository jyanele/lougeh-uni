const { createSubject } = require('../../models/index.js')

describe('Add Subject', () => {
    test('must have a valid id', () => {
        const data = {
            id: undefined,
            name: 'Data Structures',
            credits: 3,
            yearStarted: 2022
        }

        expect(() => createSubject(data).toThrow('Please prvide a valid id.'))
    })
    test('must have a valid name', () => {
        const data = {
            id: 1,
            name: undefined,
            credits: 3,
            yearStarted: 2022
        }

        expect(() => createSubject(data).toThrow('Please prvide a valid name.'))
    })
    test('must have a valid credit point', () => {
        const data = {
            id: 1,
            name: 'Data Structures',
            credits: undefined,
            yearStarted: 2022
        }

        expect(() => createSubject(data).toThrow('Please provide a valid credit value.'))
    })
    test('must have a valid starting year', () => {
        const data = {
            id: 1,
            name: 'Data Structures',
            credits: 3,
            yearStarted: undefined
        }

        expect(() => createSubject(data).toThrow('Please provide a valid year when the subject started.'))
    })
})