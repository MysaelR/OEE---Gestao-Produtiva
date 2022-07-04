import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import RedefineKey from "../pages/redefine-key";
import { Theme } from "../theme/theme";

export const Router = () => {

    // const pathname = useLocation();
    { console.log(window.location.href) }



    return (
        <BrowserRouter>




            <Theme>
                <Route path="">
                    <Route index element={<Login />} />
                    <Route path="redefine" element={<RedefineKey />} />
                </Route>

                <Route path="home">
                    <Route index element={<Home />} />
                </Route>


            </Theme>
            {/* <Routes>
                <Route path="">
                    <Route index element={<Login />} />
                    <Route path="redefine" element={<RedefineKey />} />


                </Route>

                <Theme>


                    <Route path="home">
                        <Route index element={<Home />} />
                    </Route>


                </Theme>
            </Routes> */}



        </BrowserRouter>
    );
};
