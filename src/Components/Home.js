import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

export default function Home()
{
    const location=useLocation()

    return(<div className="homePage">

    <h1>Hello {location.state.id} and welcome to the Home</h1>
    </div>)
}