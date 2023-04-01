import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
    const session = useSession();
    const pathname = usePathname();

    return <nav style={{display: "flex", justifyContent: "center", alignItems: "center", height: "5vh"}} className="border-b-[1px] border-b-gray-800">
    <ul style={{maxWidth: "500px", minWidth: "50%", display: "flex", justifyContent: "space-between", alignItems: "center"}} className="text-slate-900 text-xl space-x-4">
        <NavLink style={{width: "100%", textAlign: "center", height: "100%", padding: "1.8vw", fontWeight: pathname == "/" ? "bold" : "inherit", backgroundColor: pathname == "/" ? "#A78BFA" : "#C4B5FD"}} href="/">Create Lists</NavLink>
        <NavLink style={{width: "100%", textAlign: "center", height: "100%", padding: "1.8vw", fontWeight: pathname == "/todo-list" ? "bold" : "inherit", backgroundColor: pathname == "/todo-list" ? "#A78BFA" : "#C4B5FD"}} href="/todo-list">View Lists</NavLink>
        {session.status == "authenticated" ? <button style={{textAlign: "center", backgroundColor: "#A78BFA", margin: 0, padding: "5px", borderRadius: "5px", width: "20%"}} onClick={() => signOut()}>Sign Out</button> : <button style={{textAlign: "center", backgroundColor: "#A78BFA", margin: 0, padding: "5px", borderRadius: "5px", width: "20%"}} onClick={() => signIn()}>Login</button>}
    </ul>
</nav>
}