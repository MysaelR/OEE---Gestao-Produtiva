import { useState } from "react";


import { MediumMachineContainer } from "./style";

interface WindowsSize {
    width: number
    height: number
}

const MediumMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <MediumMachineContainer width={width} height={height}>

        </MediumMachineContainer>
    )
}
export default MediumMachine;