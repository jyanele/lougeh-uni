import { makeId } from "../Id";

export default function makeCourse({ courseDb }) {
    return Object.freeze({
        insert,
        update
    })

    async function insert({
        name,
        totalCredits,
        yearCommenced
    }) {
        await db.read()
        const courses = courseDb.data

        return courses.push({
            id: makeId,
            name: name,
            totalCredits: totalCredits,
            yearCommenced: yearCommenced
        }).write()
    }

    async function update({
        id,
        name,
        totalCredits,
        yearCommenced
    }) {
        await db.read()
        const courses = courseDb.data
        const doesIdExists = courses.find({id: id})

        if(!doesIdExists) throw new Error('Invalid course id.')

        return courses.find({id: id}).assign({
            id: id,
            name: name,
            totalCredits: totalCredits,
            yearCommenced: yearCommenced
        }).value()
    }
}