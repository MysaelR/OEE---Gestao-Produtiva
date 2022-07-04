import { ReactNode, useState } from "react";

import { AlertProvider } from './alert/AlertContext';
import { AuthProvider } from "./auth/AuthContext";
import { OrderProvider } from "./order/order";
import { SocketProvider } from "./socket/socket";

type AppProvider = {
    children: ReactNode
}



const AppProvider: React.FC<AppProvider> = ({ children }) => {

    return (

        <SocketProvider>

            <AuthProvider>

                <OrderProvider>
                    <AlertProvider>
                        {children}
                    </AlertProvider>
                </OrderProvider>
            </AuthProvider>

        </SocketProvider>


    )


};

export default AppProvider;
