export default function createCourse({ Id }) {
    return function makeCourse({
        id,
        name,
        totalCredits,
        yearCommenced
    }) {
    
        if(!id) throw new Error("Please provide a valid id.")
        if(!name) throw new Error("Please provide a valid name.")
        if(!totalCredits) throw new Error("Please provide a valid total credit point.")
        if(!yearCommenced) throw new Error("Please provide year of commencement.")
    
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getTotalCredits: () => totalCredits,
            getYearCommenced: () => yearCommenced
        })
    }
}