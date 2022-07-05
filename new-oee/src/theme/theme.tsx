import { Fragment, ReactNode, useState } from "react";
import { Routes, useLocation } from "react-router-dom";

import Header from "../components/menu/header";
import Lateral from "../components/menu/lateral";
import { MobileMenu } from "../components/menu/mobile-menu";
import { Area, Container, LateralModifield, Page, PageMargins } from "./style";

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