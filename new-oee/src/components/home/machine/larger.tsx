import { useState } from "react";

import RadialBarOne from "../../charts/home-machine/radialBar";
import { BodyLarger, HeaderLarger, LargerMachineContainer, RadialBarContainerGlobal } from "./style";

interface WindowsSize {
    width: number
    height: number
}

const LargerMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <LargerMachineContainer width={width} height={height}>
            <HeaderLarger>

            </HeaderLarger>
            <BodyLarger>
                <RadialBarOne percent={Math.round(50.50)} value_to_alert_low={30} value_to_alert_high={70} />
            </BodyLarger>




        </LargerMachineContainer>
    )
}
export default LargerMachine;