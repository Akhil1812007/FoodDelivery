import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/Error";
import Header from "./components/Header";
import ResBody from "./components/ResBody";
import {createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom"
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>

        </div>
    )
}





const appRouter=createBrowserRouter (
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<ResBody/>,
                    errorElement:<Error/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/restaurant/:id",
                    element:<RestaurantMenu/>,
                },
            ],
            errorElement:<Error/>,
        },
        
    ]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

