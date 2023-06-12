export default function createStudent({ Id }) {
    return function makeStudent({
        id = Id.makeId(),
        firstName,
        lastName,
        dateOfBirth, //dd-mm-yyyy
        enrollmentYear
    }) {

        if(Id.isValid(id)) throw new Error('Please provide a valid id.')
        if(!firstName || firstName.trim().length <= 0) throw new Error('Please provide a valid given name.')
        if(!lastName || lastName.trim().length <= 0) throw new Error('Please provide a valid last name.')
        if(!dateOfBirth || dateOfBirth.trim <= 0) throw new Error('Please provide a valid date of birth.')
        if(!enrollmentYear) throw new Error('Please provide a valid enrollment year.')

        return Object.freeze({
            getId: () => id,
            getfirstName: () => firstName,
            getLastName: () => lastName,
            getDob: () => dateOfBirth,
            getEnrollmentYear: () => enrollmentYear,
            getFullName: () => `${firstName} ${lastName}`
        })
    }
}