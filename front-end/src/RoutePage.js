import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ListAllHabits } from "./components";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
const RoutePage=()=>{
    return(
<>
    <Routes>
      <ListAllHabits/>
    </Routes>
</>
    )
   
}
export default RoutePage;