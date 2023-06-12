import { faker } from '@faker-js/faker'
import Id from '../../src/Id/index.js'

export default function makeFakeCourse(overrides) {
    const course = {
        id: Id.makeId,
        name: faker.lorem.words,
        totalCredits: faker.number.bigInt({ min: 1, max: 6}),
        yearCommenced: faker.number.bigInt({ min: 2023, max: 2099})
    }

    return {
        ...course,
        ...overrides
    }
}