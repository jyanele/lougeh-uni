export default function createCourse({ Id }) {
    return function makeCourse({
        name,
        totalCredits,
        yearCommenced
    }) {
        if(!name) throw new Error("Please provide a valid name.")
        if(!totalCredits) throw new Error("Please provide a valid total credit point.")
        if(!yearCommenced) throw new Error("Please provide year of commencement.")
    
        return Object.freeze({
            getName: () => name,
            getTotalCredits: () => totalCredits,
            getYearCommenced: () => yearCommenced
        })
    }
}