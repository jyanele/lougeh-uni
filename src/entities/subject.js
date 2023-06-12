export default function createSubject ({ Id }) {
    return function makeSubject({
        id = Id.makeId(),
        name,
        credits,
        yearStarted
    }) {
    
        if(!Id.isValid(id)) throw new Error('Please provide a valid id.')
        if(!name) throw new Error('Please provide a valid subject name.')
        if(!credits || credits < 0) throw new Error('Please provide a valid credit value.')
        if(!yearStarted) throw new Error('Please provide a valid year when the subject started.')
    
        return Object.freeze({
            getName: () => name,
            getCredits: () => credits,
            getYearStarted: () => yearStarted
        })
    }
}

