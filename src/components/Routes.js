import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import TextBox from "./TextBox";

function AppRoutes(props) {
    return (
        <Routes>
            <Route exact path="/" element={<TextBox mode={props.mode} />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
    )
}
export default AppRoutes;