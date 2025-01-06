import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
    return(
        <nav className="max-w-5xl mx-auto h-16 flex items-center gap-3"> 
            <div className="flex items-center">
                <span className="font-bold ml-2">Task</span>Master
            </div>
            <ul className="flex gap-4">
                <Link to={'/'}>Task</Link>
                <Link to={'users'}>User</Link>
            </ul>
            <div className="ml-auto">
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    )
}