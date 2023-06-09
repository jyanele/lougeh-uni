import { createId, isCuid } from '@paralleldrive/cuid2';

const Id = Object.freeze({
    makeId: () => createId(),
    isValid: (id) => isCuid(id)
})

export default Id
export {
    makeId,
    isValid
}