
import Header from "../components/menu/header";
import Lateral from "../components/menu/lateral";
import { ReactNode, useState, Fragment } from "react";

import { Area, Container, LateralModifield, Page } from "./style";
import { Routes, useLocation } from "react-router-dom";
import { MobileMenu } from "../components/menu/mobile-menu";

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {

    const [expand, setExpand] = useState(false);
    const [showMenuIcon, setShowMenuIcon] = useState(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const location = useLocation();
    console.log(location.pathname);

    if (location.pathname === '/' || location.pathname === '/redefine') {
        return (
            <Routes>
                {children}
            </Routes>
        )
    } else {
        return (

            <Container>
                <Header menuIcon={showMenuIcon} showMenu={() => setShowMobileMenu(!showMobileMenu)} />
                <Area>
                    <Lateral />
                    <MobileMenu show={showMobileMenu} />
                    <Page>
                        <Routes>
                            {children}
                        </Routes>
                    </Page>
                </Area>
            </Container>
        )
    }








}