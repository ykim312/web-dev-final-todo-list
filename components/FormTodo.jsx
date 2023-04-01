"use client";

import Input from "./input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function FormTodo() {
  const router = useRouter();
  const session = useSession();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: formData.get("todo"),
        date: formData.get("date"),
        time: formData.get("time"),
        email: session.data.user.email
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh()
    e.target.reset();
    router.push("/todo-list")
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      {session.status == "authenticated" ?
      <form
        onSubmit={handleSubmit}
        style={{borderRadius: "10px"}}
        className="bg-violet-400 space-y-4 p-8 w-[90vw] md:w-[40vw]"
      >
        <div className="flex flex-col gap-4">
          <label className="text-slate-900"><b>Todo</b></label>
          <Input type="text" name="todo" placeholder="add your task" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-900"><b>Date</b></label>
          <Input name="date" type="date" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-900"><b>Time</b></label>
          <Input name="time" type="time" />
        </div>
        <div className="text-center pt-6">
          <button
            className="bg-slate-800 rounded-md hover:bg-violet-200 hover:text-slate-800 text-slate-200 px-6 py-2"
            type="submit"
          >
            Add
          </button>
        </div>
      </form> : <div>User not authenticated!</div>}
    </div>
  );
}
