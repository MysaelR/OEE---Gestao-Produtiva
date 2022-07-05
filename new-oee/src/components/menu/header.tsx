import React from "react";

import MyPhoto from '../../assets/menu/cracha.png';
import Menu from '../../assets/menu/menu.svg';
import Logo from '../../assets/menu/oee_logo.svg';
import { ContainerUserHeader, HeaderContainer, LogoIconHeader, MenuIconHeader, PhotoContainerUserHeader, UserAndWorkContainerUserHeader, UserTextContainerUserHeader, WorkTextContainerUserHeader } from "./style";

interface HeaderMenuI {
    menuIcon: boolean,
    showMenu: () => void;
}


const Header: React.FC<HeaderMenuI> = ({ menuIcon, showMenu }) => {



    return (
        <HeaderContainer>
            <MenuIconHeader src={Menu} active={menuIcon} onClick={showMenu} />
            <LogoIconHeader src={Logo} />
            <ContainerUserHeader>
                <PhotoContainerUserHeader src={MyPhoto} />
                <UserAndWorkContainerUserHeader>
                    <UserTextContainerUserHeader>
                        Mysael Ribeiro

                    </UserTextContainerUserHeader>
                    <WorkTextContainerUserHeader>
                        Supervisor de Testes
                    </WorkTextContainerUserHeader>
                </UserAndWorkContainerUserHeader>
            </ContainerUserHeader>
        </HeaderContainer>
    )
}

export default Header;