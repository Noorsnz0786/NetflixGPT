import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Browse from "../components/Browse"
import Login from "../components/Login"

const Route = () => {
    return (
    <RouterProvider router = {appRouter}/>
  )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/Browse",
        element : <Browse />
    }
])
export default Route