import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UsersPage from "./UsersPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPaage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
    { index: true , element: <HomePage/> },
    { path: '/login' , element: <LoginPage/> },
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