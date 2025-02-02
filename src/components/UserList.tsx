
import UserItem from "./UserItem"

import { type UserType } from "../App"

type UserListProps ={
    users: UserType[],
    onDeleteUser: (id: number) => void
}

function UserList({users, onDeleteUser}: UserListProps){
    return(
        <div className="flex flex-col justify-center">    
        {users.map((user) => (
            <div key={user.id}>
            <UserItem userName={user.userName} onDelete={onDeleteUser} id={user.id}> 
                <p>{user.email}</p>
            </UserItem>
            </div>
        ))}
        </div>
    
    )

}
export default UserList