export default function makeCourse({
    name, 
    creditPoints, 
    yearCommenced
}) {
    if(!name) {
        throw new Error('Please enter a name.')
    }
    if(!creditPoints || (creditPoints < 0)) {
        throw new Error('Please enter a valid credit point.')
    }
    if(!yearCommenced){
        throw new Error('Please enter year of commencement.')
    }

    return Object.freeze({
        getName: () => name,
        getCreditPoints: () => creditPoints,
        getYearCommenced: () => yearCommenced
    })
}
