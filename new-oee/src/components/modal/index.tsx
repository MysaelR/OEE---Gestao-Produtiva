import React, { ReactNode } from "react";

import { AlignCenterStyle, ModalContainer } from "./style";

interface ModalI {
    children: ReactNode
}

const Modal: React.FC<ModalI> = ({ children }) => {


    return (
        <AlignCenterStyle>
            <ModalContainer>
                {children}
            </ModalContainer>
        </AlignCenterStyle>
    )


}
export default Modal