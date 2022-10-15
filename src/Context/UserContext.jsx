import { createContext } from 'react'

const user = {
    firstName: "Abdrahman",
    lastName: "Adebayo"
}
const UserContext = createContext(user);

export {user, UserContext}