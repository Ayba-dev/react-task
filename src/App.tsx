import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import PrivateRouter from "./components/PrivateProvider/PrivateRouter.tsx";
import Register from "./pages/RegisterPage";
import useAuth from "./hooks/UseAuth.tsx";
import Layout from "./components/Layout";
import WorkSpace from "./pages/Workspace";


function App() {


    const isAuthenticated = useAuth

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/'} element={ isAuthenticated ? <PrivateRouter><Layout/></PrivateRouter> : <Navigate to={'/register'}/>}>
                    <Route path={':id'} element={<WorkSpace/>}/>
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