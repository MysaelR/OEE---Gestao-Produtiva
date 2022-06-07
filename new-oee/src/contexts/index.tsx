import { ReactNode, useState } from "react";

import { AlertProvider } from './alert/AlertContext';

type AppProvider = {
    children: ReactNode
}



const AppProvider: React.FC<AppProvider> = ({ children }) => {

    return (

        <AlertProvider>
            {children}
        </AlertProvider>

    )


};

export default AppProvider;
