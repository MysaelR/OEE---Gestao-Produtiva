import { useState } from "react";

import { LargerMachineContainer } from "./style";

interface WindowsSize {
    width: number
    height: number
}

const LargerMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <LargerMachineContainer width={width} height={height}>

        </LargerMachineContainer>
    )
}
export default LargerMachine;