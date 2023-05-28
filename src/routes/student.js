export default function makeStudent({
    firstname, 
    surname, 
    dateOfBirth, 
    yearEnrolled
}) {
    return Object.freeze({
        getFullName: () => `${firstname} ${surname}`,
        getFirstName: () => firstname,
        getSurname: () => surname,
        getDateOfBirth: () => dateOfBirth,
        getEnrollmentYear: () => yearEnrolled
    })
}