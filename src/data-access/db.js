import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

export default function db(filename) {
    return new Low(new JSONFile(filename), {})
}