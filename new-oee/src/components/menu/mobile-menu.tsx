import { useCallback, useState } from "react";
import { LineDivideOptionMobileMenu, MobileMenuContainer, OptionLateralMenu, TextOptionLateralMenu } from "./style";
import Home from '../../assets/menu/home.svg'
import View from '../../assets/menu/view_agenda.svg';
import Collectors from '../../assets/menu/collectors.svg';
import Settings from '../../assets/menu/settings.svg';
import Logout from '../../assets/menu/logout.svg';
import ExpandCircle from '../../assets/menu/expand.svg';
import RevertExpand from '../../assets/menu/revert_expand.svg';
import { useNavigate } from "react-router-dom";


interface MobileMenuI {
    show: boolean
}

export const MobileMenu: React.FC<MobileMenuI> = ({ show }) => {

    const [expand, setExpand] = useState(false);
    const [selected, setSelected] = useState(1);
    let navegate = useNavigate();

    function selectedOption(value: number) {
        if (value === selected) {
            return true
        } return false

    }

    const memorizedOption = useCallback((value: number) => selectedOption(value), [selected]);

    return (
        <MobileMenuContainer active={show}>

            <OptionLateralMenu active={true} selected={memorizedOption(1)} onClick={() => { setSelected(1) }}>
                <img src={Home} />
                <TextOptionLateralMenu active={true}>INÍCIO</TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={true} selected={memorizedOption(2)} onClick={() => { setSelected(2); navegate('/teste') }}>
                <img src={View} />
                <TextOptionLateralMenu active={true}>ESTAÇÕES</TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={true} selected={memorizedOption(3)} onClick={() => { setSelected(3) }}>
                <img src={Collectors} />
                <TextOptionLateralMenu active={true}>COLETORES</TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={true} selected={memorizedOption(4)} onClick={() => { setSelected(4) }}>
                <img src={Settings} />
                <TextOptionLateralMenu active={true}>CONFIGURAÇÕES</TextOptionLateralMenu>
            </OptionLateralMenu>

            <LineDivideOptionMobileMenu />

            {/* <OptionLateralMenu active={true} selected={memorizedOption(0)} onClick={() => setExpand(!expand)}>
                <img src={expand ? RevertExpand : ExpandCircle} />
                <TextOptionLateralMenu active={true}>REDUZIR </TextOptionLateralMenu>
            </OptionLateralMenu> */}

            <OptionLateralMenu active={true} selected={memorizedOption(0)}>
                <img src={Logout} />
                <TextOptionLateralMenu active={true}>SAIR </TextOptionLateralMenu>
            </OptionLateralMenu>

        </MobileMenuContainer>
    )
}