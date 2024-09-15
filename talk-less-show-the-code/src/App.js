import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import ResBody from "./components/ResBody";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <ResBody/>

        </div>
    )
}







const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

