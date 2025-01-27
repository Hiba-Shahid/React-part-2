import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserList from "./UserList";

const router = createBrowserRouter([
    {
        path: '/', element: <HomePage/>
    },
    {
        path: '/users', element: <UserList/>
    },
    {
        path: '/contact', element: <ContactPage/>
    }
]);

export default router;