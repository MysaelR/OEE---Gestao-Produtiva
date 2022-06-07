import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Login from "../pages/login";

export const Router = () => {
    { console.log(window.location.href) }

    return (
        <BrowserRouter>

            {window.location.href === 'http://localhost:3000/' ?

                (<Routes>
                    <Route path="/" element={<Login />} />
                </Routes>) :

                (<> {/* <Menu />
                    <Routes>
                        <Route path="/home" element={<Home />} />

                        <Route path="medicines">
                            <Route
                                index
                                element={<Medicines />}
                            />
                            <Route
                                path="add"
                                element={<AddMedicines />}
                            />
                            <Route
                                path="show"
                                element={<ShowMedicines />}
                            />


                        </Route>

                        <Route path="/files" element={<Files />} />
                    </Routes> */}</>)




            }


        </BrowserRouter>
    );
};
