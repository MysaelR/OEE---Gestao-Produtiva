import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Collectors from '../../assets/menu/collectors.svg';
import ExpandCircle from '../../assets/menu/expand.svg';
import Home from '../../assets/menu/home.svg'
import Logout from '../../assets/menu/logout.svg';
import RevertExpand from '../../assets/menu/revert_expand.svg';
import Settings from '../../assets/menu/settings.svg';
import View from '../../assets/menu/view_agenda.svg';
import { LateralMenu, LineDivideOptionLateralMenu, OptionLateralMenu, TextOptionLateralMenu } from "./style";

/* interface LateralMenuI {
    expandMenu: boolean
} */

const Lateral: React.FC = () => {

    const [expand, setExpand] = useState(false);
    const [selected, setSelected] = useState(1);
    let navegate = useNavigate();

    function selectedOption(value: number) {
        if (value === selected) {
            return true
        } return false

    }

    const memorizedOption = useCallback((value: number) => selectedOption(value), [selected]);
    // onClick={() => setExpand(!expand)}
    return (
        <LateralMenu active={expand} >

            <OptionLateralMenu active={expand} selected={memorizedOption(1)} onClick={() => { setSelected(1); navegate('/home') }}>
                <img src={Home} />
                <TextOptionLateralMenu active={expand}>INÍCIO</TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={expand} selected={memorizedOption(2)} onClick={() => { setSelected(2); navegate('/teste') }}>
                <img src={View} />
                <TextOptionLateralMenu active={expand}>ESTAÇÕES</TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={expand} selected={memorizedOption(3)} onClick={() => { setSelected(3) }}>
                <img src={Collectors} />
                <TextOptionLateralMenu active={expand}>COLETORES</TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={expand} selected={memorizedOption(4)} onClick={() => { setSelected(4) }}>
                <img src={Settings} />
                <TextOptionLateralMenu active={expand}>CONFIGURAÇÕES</TextOptionLateralMenu>
            </OptionLateralMenu>

            <LineDivideOptionLateralMenu active={expand} />

            <OptionLateralMenu active={expand} selected={memorizedOption(0)} onClick={() => setExpand(!expand)}>
                <img src={expand ? RevertExpand : ExpandCircle} />
                <TextOptionLateralMenu active={expand}>REDUZIR </TextOptionLateralMenu>
            </OptionLateralMenu>

            <OptionLateralMenu active={expand} selected={memorizedOption(0)}>
                <img src={Logout} />
                <TextOptionLateralMenu active={expand}>SAIR </TextOptionLateralMenu>
            </OptionLateralMenu>

        </LateralMenu >
    )
}

export default Lateral;