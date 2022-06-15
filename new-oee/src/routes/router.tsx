import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import RedefineKey from "../pages/redefine-key";

export const Router = () => {
    { console.log(window.location.href) }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="redefine" element={<RedefineKey />} />
                </Route>

                <Route path="/home">
                    <Route index element={<Home />} />
                </Route>

            </Routes>

        </BrowserRouter>
    );
};
