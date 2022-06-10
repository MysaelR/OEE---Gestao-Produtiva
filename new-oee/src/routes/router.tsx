import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

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
            </Routes>

        </BrowserRouter>
    );
};
