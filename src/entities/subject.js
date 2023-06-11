export default function createSubject ({ Id }) {
    return function makeSubject({
        id,
        name,
        credits,
        yearStarted
    }) {
    
        if(!id) throw new Error('Please provide a valid id.')
        if(!name) throw new Error('Please provide a valid subject name.')
        if(!credits || credits < 0) throw new Error('Please provide a valid credit value.')
        if(!yearStarted) throw new Error('Please provide a valid year when the subject started.')
    
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getCredits: () => credits,
            getYearStarted: () => yearStarted
        })
    }
}

