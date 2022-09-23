import { getUser } from './repository.js';


export async function ormGetAllUsers() {
    return await getUser({})
}