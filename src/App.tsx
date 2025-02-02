import { useState } from "react";

import UserList from "./components/UserList";

type UserItem ={
    userName: string,
    email: string,
    id: number
}
function App() {
    const [users, setUsers] = useState<UserItem[]>([])
    function handleAddUser() {
        setUsers((prevUser) => {
            const newUser: UserItem = {
                id: Math.random(),
                userName: "User1",
                email: "user1@.com",
            }
            return [...prevUser, newUser]
        }) 
    }

    return (
        <>
            {/* <UserList UserName="User1" ><p>hello</p></UserList>
            <UserList UserName="User2" ></UserList> */}
            
                <div className="flex justify-center">
                <button onClick={handleAddUser} className="px-4 py-2 mt-4 text-slate-100 bg-slate-500 rounded-md ">
                Add User</button>
                </div>
                <div className="flex flex-col justify-center">    
                {users.map((user) => (
                    <div key={user.id}>
                    <UserList  UserName={user.userName}>
                        <p>{user.email}</p>
                    </UserList>
                    </div>
                ))}
                </div>
        </>
    );
}

export default App;