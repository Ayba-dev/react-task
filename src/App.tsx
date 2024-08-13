import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import PrivateRouter from "./components/PrivateProvider/PrivateRouter.tsx";
import Register from "./pages/RegisterPage";
import useAuth from "./hooks/UseAuth.tsx";
import Layout from "./components/Layout";


function App() {


    const isAuthenticated = useAuth

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/'} element={isAuthenticated ? <Layout/> : <Navigate to={'/register'}/>}>
                </Route>
                <Route path={'/register'} element={<Register/>}/>
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App