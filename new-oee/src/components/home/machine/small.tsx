import { useState } from "react";

import { SmallMachineContainer } from "./style";

interface WindowsSize {
    width: number
    height: number
}

const SmallMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <SmallMachineContainer width={width} height={height}>

        </SmallMachineContainer>
    )
}
export default SmallMachine;