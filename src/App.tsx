import { useState } from "react";

import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

export type UserType ={
    userName: string,
    email: string,
    id: number
}
function App() {
    const [users, setUsers] = useState<UserType[]>([])
    function handleAddUser(userName: string, email: string) {
        setUsers((prevUser) => {
            const newUser: UserType = {
                id: Math.random(),
                userName: userName,
                email: email,
            }
            return [...prevUser, newUser]
        }) 
    }


    function handleDeleteUser(id: number){
        setUsers((prevUsers) => {
            return prevUsers.filter((item) => {
                return item.id !== id
            })
        })
    }
    return (
        <>
            {/* <UserItem UserName="User1" ><p>hello</p></UserItem>
            <UserItem UserName="User2" ></UserItem> */}
            
                <div className="py-4 text-center">
                <AddUser onAddUser={handleAddUser}/>
                </div>
                <UserList users={users} onDeleteUser={handleDeleteUser}/>
          
        </>
    );
}

export default App;