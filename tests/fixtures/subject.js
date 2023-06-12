import { faker } from '@faker-js/faker'
import Id from '../../src/Id/index.js'

export default function makeFakeSubject(overrides) {
    const subject = {
        id: Id.makeId,
        name: faker.lorem.words,
        credits: faker.number.bigInt({ min: 1, max: 12 }),
        yearStarted: faker.number.bigInt({ min: 2023, max: 2099})
    }

    return {
        ...subject,
        ...overrides
    }
}