import UserItem from "./UserItem"
import Message from "./Message"

import { type UserType } from "../App"
import { type ReactNode } from "react"

type UserListProps ={
    users: UserType[],
    onDeleteUser: (id: number) => void
}

function UserList({users, onDeleteUser}: UserListProps){
    let messageText: ReactNode 
    if(users.length === 0){
        messageText = <Message mode="allowed"> We have no user </Message>

    }

    else if(users.length >= 2){
        messageText = <Message mode="not-allowed"> We have too many users </Message>
    }
    return(
        <>
        {messageText}
        <div className="flex  justify-center">    
        {users.map((user) => (
            <div key={user.id}>
            <UserItem userName={user.userName} onDelete={onDeleteUser} id={user.id}> 
                <p>{user.email}</p>
            </UserItem>
            </div>
        ))}
        </div>
        </>
    
    )

}
export default UserList