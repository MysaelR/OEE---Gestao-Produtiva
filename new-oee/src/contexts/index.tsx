import { ReactNode, useState } from "react";

import { AlertProvider } from './alert/AlertContext';
import { AuthProvider } from "./auth/AuthContext";
import { OrderProvider } from "./order/order";

type AppProvider = {
    children: ReactNode
}



const AppProvider: React.FC<AppProvider> = ({ children }) => {

    return (
        <AuthProvider>
            <OrderProvider>
                <AlertProvider>
                    {children}
                </AlertProvider>
            </OrderProvider>
        </AuthProvider>


    )


};

export default AppProvider;
