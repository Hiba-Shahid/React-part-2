import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UsersPage from "./UsersPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
    { index: true , element: <HomePage/> },
    { path: 'users',
         element: <UsersPage/>,
        children: [

            { path: ':id', element: <UserDetail/> },
        ]
 },
    
]
}
]);

export default router;