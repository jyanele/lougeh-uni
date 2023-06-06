describe('Course', () => {

    function createCourse({
        id,
        name,
        requiredCreditPoints,
        yearStarted
    } = {}) {

        if (!id) throw new Error('Please provide a valid id.')
        if (!name || name.length <= 0) throw new Error('Please provide a valid name.')
        if (!requiredCreditPoints || requiredCreditPoints <= 0) throw new Error('Please provide a valid credit point.')
        if (!yearStarted || typeof(yearStarted) === 'string') throw new Error('Please provide a valid year.')
        return Object.freeze({
            getName: () => name,
            getId: () => id,
            getCreditPoints: () => requiredCreditPoints,
            getYearStarted: () => yearStarted
        })
    }

    test('must have a name', () => {
        const data = {
            id: 1,
            name: undefined,
            requiredCreditPoints: 12,
            yearStarted: 2021
        }

        expect(() => createCourse(data).toThrow('Please provide a valid name.'))
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