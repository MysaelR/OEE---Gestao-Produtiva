import { useState } from "react";
import WorkingIcon from '../../../assets/machine-list/check.svg';
import OrderIcon from '../../../assets/machine-list/order.svg';
import ProductIcon from '../../../assets/machine-list/product.svg';
import StopedIcon from '../../../assets/machine-list/stop.svg';
import RadialBarOne from "../../charts/home-machine/radialBar";
import { BodySmall, HeaderLargerHalfLineToDivideStatus, HeaderLargerStatus, HeaderLargerStatusIcon, HeaderLargerStatusText, HeaderSmall, HeaderSmallMachineId, HeaderSmallMachineName, HeaderSmallStatus, HeaderSmallStatusText, SmallMachineContainer } from "./style";

interface WindowsSize {
    width: number
    height: number
}
var machine_status = 'funcionando';
const SmallMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <SmallMachineContainer width={width} height={height}>
            <HeaderSmall>
                <HeaderSmallMachineId>
                    0000-0000
                </HeaderSmallMachineId>
                <HeaderSmallMachineName>
                    Prensa Menegotto
                </HeaderSmallMachineName>
                <HeaderSmallStatus status={machine_status}>
                    <HeaderLargerStatusIcon src={machine_status === "funcionando" ? WorkingIcon : StopedIcon} />
                    <HeaderLargerHalfLineToDivideStatus status={machine_status} />
                    <HeaderSmallStatusText status={machine_status}>
                        {machine_status === 'funcionando' ? 'FUNCIONANDO' : 'PARADA'}
                    </HeaderSmallStatusText>
                </HeaderSmallStatus>
            </HeaderSmall>
            <BodySmall>
                <RadialBarOne percent={Math.round(52)} value_to_alert_low={30} value_to_alert_high={70} smallSize={true} />
            </BodySmall>
        </SmallMachineContainer>
    )
}
export default SmallMachine;