import { SessionProvider } from "next-auth/react"
import Navbar from "@/components/Navbar";
import "../styles/global.css";

export default function App({ Component, pageProps: {session, ...pageProps} }) {

  return <SessionProvider session={session}>
    <div style={{minHeight: "100vh"}} className="bg-violet-300">
    {/* <nav style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="border-b-[1px] border-b-gray-800">
                <ul style={{maxWidth: "500px", minWidth: "50%", display: "flex", justifyContent: "space-between", alignItems: "center"}} className="text-slate-900 text-xl space-x-4">
                <NavLink style={{width: "100%", textAlign: "center", height: "100%", padding: "1.8vw", fontWeight:"bold"}} href="/">Todo</NavLink>
                <NavLink style={{width: "60%", textAlign: "center", height: "100%", padding: "0.3em", margin: "0.5em", borderRadius: "5px", fontWeight: "bold", backgroundColor:"#A78BFA"}} href="/">Sign In</NavLink>
                </ul>
            </nav> */}
            <Navbar />
            {/* <nav style={{display: "flex", justifyContent: "center", alignItems: "center", height: "5vh"}} className="border-b-[1px] border-b-gray-800">
                <ul style={{maxWidth: "500px", minWidth: "50%", display: "flex", justifyContent: "space-between", alignItems: "center"}} className="text-slate-900 text-xl space-x-4">
                    <NavLink style={{width: "100%", textAlign: "center", height: "100%", padding: "1.8vw", fontWeight: pathname == "/" ? "bold" : "inherit", backgroundColor: pathname == "/" ? "#A78BFA" : "#C4B5FD"}} href="/">Create Lists</NavLink>
                    <NavLink style={{width: "100%", textAlign: "center", height: "100%", padding: "1.8vw", fontWeight: pathname == "/todo-list" ? "bold" : "inherit", backgroundColor: pathname == "/todo-list" ? "#A78BFA" : "#C4B5FD"}} href="/todo-list">View Lists</NavLink>
                    {!session && <button style={{textAlign: "center", backgroundColor: "#A78BFA", margin: 0, padding: "5px", borderRadius: "5px", width: "20%"}} onClick={() => signIn()}>Login</button>}
                </ul>
            </nav> */}
            
    <Component {...pageProps} />
    </div>
    </SessionProvider>
}
