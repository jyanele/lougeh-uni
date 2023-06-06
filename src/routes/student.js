export default function makeStudent({
    firstname, 
    surname, 
    dateOfBirth, 
    yearEnrolled
}) {
    if (!firstname || firstname.length === 0) throw new Error("Please provide a valid firstname")
    if (!surname || surname.length === 0) throw new Error("Please provide a valid surname")
    if (!dateOfBirth) throw new Error("Please provide a valid date of birth")
    return Object.freeze({
        getFullName: () => `${firstname} ${surname}`,
        getFirstName: () => firstname,
        getSurname: () => surname,
        getDateOfBirth: () => dateOfBirth,
        getEnrollmentYear: () => yearEnrolled
    })
}