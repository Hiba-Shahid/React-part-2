import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const router = createBrowserRouter([
    {
        path: '/', element: <HomePage/>
    },
    {
        path: '/users', element: <UserList/>
    },
    {
        path: '/users/:id', element: <UserDetail/>
    },
]);

export default router;