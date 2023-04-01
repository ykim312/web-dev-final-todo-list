"use client"

import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Card({todoLists}) {
    const router = useRouter();

    async function delTodo(id){
        const res = await fetch(`/api/todos/${id}`,{method:"DELETE"});
        const data= await res.json()

        console.log(data);
        router.refresh();
    }
    return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {todoLists.map((todoList) => (
    <div style={{borderRadius: "7px"}} key={todoList.id} className="bg-violet-400 p-4 relative">
      <button style={{marginTop: "12px"}} className="absolute top-2 right-4" onClick={()=> delTodo(todoList.id)}>
        <Image src="/trash.svg" alt="Trash" width={17} height={17} />
      </button>
      <div className="space-y-2">
        <h1 className="text-2xl">{todoList.todo}</h1>
        <p>{todoList.date}</p>
      </div>
      <div className="mt-4 text-right">
        <Link
          className="bg-slate-800 rounded-md hover:bg-violet-200 hover:text-slate-800 text-slate-200 px-6 py-2"
          href={`/todo-list/${todoList.id}`}
        >
          Detail
        </Link>
      </div>
    </div>
  ))}
    </div>;
}
