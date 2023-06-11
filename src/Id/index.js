import { createId, isCuid } from '@paralleldrive/cuid2';

const Id = Object.freeze({
    makeId: createId,
    isValid: isCuid
})

export default Id