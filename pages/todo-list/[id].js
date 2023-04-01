import { useSession } from "next-auth/react";

const toObject = (data) => {
  return JSON.parse(JSON.stringify(data, (_, value) =>
      typeof value === 'bigint'
          ? value.toString()
          : value // return everything else unchanged
  ));
}

export default function DynamicPage({todo}) {
  // const {id} = params
  const session = useSession();
  
  return (
    <div className="text-slate-900 p-4">
      {session.status == "authenticated" ?
      <div key={todo.id} className="bg-violet-400 p-4 md:w-[50vw] lg:w-[30vw]">
        <div className="space-y-2">
          <h1 className="text-2xl">{todo.todo}</h1>
          <p>{todo.date}</p>
          <h3 className="text-lg">time: {todo.time}</h3>
        </div>
      </div> : <div>User not authenticated!</div>}
    </div>
  );
}

export async function getServerSideProps({params}) {

  const data = await prisma.todo.findUnique({where:{id: params.id}});
  return {
    props: {
      todo: toObject(data),
    }
  }
}
