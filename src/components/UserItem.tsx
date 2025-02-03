import { type ReactNode } from "react";

// type UserListProps = {
//     UserName: string;
//     Email: string;
// }

interface UserItemProps {
  userName: string;
  // Email: string;
  children: ReactNode;
  onDelete: (id: number) => void;
  id: number;
}

function UserItem(props: UserItemProps) {
  return (
    <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
      <div className="p-4 m-4 text-center bg-slate-800 rounded-md w-full">
        <p className="p-1 font-bold text-lg">{props.userName}</p>
        <p className="p-1">{props.children}</p>
        <button
          className="px-4 py-2 mt-4 text-slate-100 bg-slate-500 rounded-md"
          onClick={() => props.onDelete(props.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default UserItem;
