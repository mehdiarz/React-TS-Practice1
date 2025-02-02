import { type FormEvent } from "react"

function AddUser(){
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formdata = new FormData(event.currentTarget)

        const username = formdata.get('username')
        const email = formdata.get('email')

        console.log(username, email)
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl p-6 my-10 mx-auto bg-slate-800 rounded-md">
            <input type="text" id="username" name="username" placeholder="Username" className="p-2 bg-slate-600
            text-slate-300 outline-none rounded-md"/>
            <input type="text" id="email" name="email" placeholder="Email" className="p-2 bg-slate-600
            text-slate-300 outline-none rounded-md"/>
            <button type="submit" className="px-4 py-2 bg-slate-800 text-slate-100 rounded-md">Add User</button>
        </form>
    )
}

export default AddUser