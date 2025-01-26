import { useContext } from "react";
import TaskContext from "./tasks/tasksContext";
import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
    const { tasks } = useContext(TaskContext);
    const  counter  = useCounterStore(s => s.counter);

    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{counter}</span>
            <LoginStatus />
        </nav>
    )
}

export default NavBar
