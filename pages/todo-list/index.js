import prisma from '@/lib/prisma';
import Card from '@/components/Card';
import { useSession } from 'next-auth/react';

const toObject = (data) => {
  return JSON.parse(JSON.stringify(data, (_, value) =>
      typeof value === 'bigint'
          ? value.toString()
          : value // return everything else unchanged
  ));
}

export default function TodoList({todos}) {
  const session = useSession();

  return (
    session.status == "authenticated" ?
    <div style={{paddingLeft: "2em", paddingRight: "2em", paddingTop: "1em", paddingBottom: "1em"}} className="text-slate-900 space-y-4">
      <h1 style={{fontSize: "30px", marginTop: "1em", marginBottom: "1em"}}>Take a look at your Lists!</h1>
       <Card todoLists={todos}/>
    </div> : <div style={{paddingLeft: "2em", paddingRight: "2em", paddingTop: "1em", paddingBottom: "1em"}} className="text-slate-900 space-y-4">User not authenticated!</div>
  );
}

export async function getServerSideProps() {
    // will always run on the server
    // newest first
    const data = await prisma.todo.findMany({
        select: {
            id: true,
            todo: true,
            date: true
        }
    });
  
    return {
      props: {
        todos: toObject(data),
      },
    }
  }
