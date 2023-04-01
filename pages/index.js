import FormTodo from "@/components/FormTodo";

export default function Home() {
  return (
    <main style={{marginTop: "15vh"}} className="p-4">
      {/* <h1 className="text-slate-900 mb-4 text-center text-xl">Form Todo</h1> */}
      <FormTodo />
    </main>
  );
}
