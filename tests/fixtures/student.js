import { faker } from '@faker-js/faker'
import Id from '../../src/Id/index.js'

export default function makeFakeStudent(overrides) {
    const student = {
        id: Id.makeId,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dateOfBirth: faker.number.bigInt({ min: 1900, max: 2099}),
        enrollmentYear: faker.number.bigInt({ min: 2023, max: 2099})
    }

    return {
        ...student,
        ...overrides
    }
}