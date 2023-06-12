import { makeSubject } from './'
import makeFakeSubject from '../../tests/fixtures/subject'

describe('Add Subject', () => {
    test('must have a valid id', () => {
        const subject = makeFakeSubject({ id: undefined})
        expect(() => makeSubject(subject).toThrow('Please prvide a valid id.'))
    })

    test('must have a valid name', () => {
        const subject = makeFakeSubject({ name: undefined })
        expect(() => makeSubject(data).toThrow('Please prvide a valid name.'))
    })

    test('must have a valid credit point', () => {
        const subject = makeFakeSubject({ credits: undefined })
        expect(() => makeSubject(data).toThrow('Please provide a valid credit value.'))
    })

    test('must have a valid starting year', () => {
        const subject = makeFakeSubject({ yearStarted: undefined })
        expect(() => makeSubject(data).toThrow('Please provide a valid year when the subject started.'))
    })
})