import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css"
import SimulateApi from "./components/SimulateApi";
import ToDoList from "./pages/ToDoList";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import List from "./pages/List";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <SimulateApi/>,
    // },
    // {
    //     path: "/todolist",
    //     element: <ToDoList/>,
    // },
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/list",
        element: <List/>
    }
])

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;