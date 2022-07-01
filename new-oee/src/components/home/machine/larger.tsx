import { useState } from "react";

import WorkingIcon from '../../../assets/machine-list/check.svg';
import OrderIcon from '../../../assets/machine-list/order.svg';
import ProductIcon from '../../../assets/machine-list/product.svg';
import StopedIcon from '../../../assets/machine-list/stop.svg';
import RadialBarOne from "../../charts/home-machine/radialBar";
import ProgressBar from "./progressbar";
import { BodyLarger, BodyLargerInformationAprovedAndScrap, BodyLargerInformationContainerAprovedAndScrap, BodyLargerInformationProductionPerOrder, BodyLargerInformations, BodyLargerInformationShift, GenericText, HeaderLarger, HeaderLargerContainerOrder, HeaderLargerContainerProduct, HeaderLargerContainerProductsAndOrder, HeaderLargerHalfLineToDivide, HeaderLargerHalfLineToDivideStatus, HeaderLargerMachineId, HeaderLargerMachineName, HeaderLargerProductAndOrderIcon, HeaderLargerProductAndOrderText, HeaderLargerStatus, HeaderLargerStatusIcon, HeaderLargerStatusText, LargerMachineContainer, RadialBarContainerGlobal } from "./style";

interface WindowsSize {
    width: number
    height: number
}

const productName = 'Tênis';
const productOrder = '004sdfa48d45f asdas d aasdaaaaaaaaaaaaaa';
var machine_status = 'funcionando';

interface LargerMachineInformationsI {
    name: string,
    order_product?: string,
    order_code?: string,
    oee_value: string,
    status: string,

}

const LargerMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <LargerMachineContainer width={width} height={height}>
            <HeaderLarger>
                <HeaderLargerMachineId>0000-0000</HeaderLargerMachineId>
                <HeaderLargerMachineName>Prensa Menegotto</HeaderLargerMachineName>
                <HeaderLargerContainerProductsAndOrder>

                    <HeaderLargerContainerProduct>
                        <HeaderLargerProductAndOrderIcon src={ProductIcon} />
                        <HeaderLargerProductAndOrderText quantity={productName.length}>
                            {productName}
                        </HeaderLargerProductAndOrderText>
                    </HeaderLargerContainerProduct>

                    <HeaderLargerHalfLineToDivide />

                    <HeaderLargerContainerOrder>
                        <HeaderLargerProductAndOrderIcon src={OrderIcon} active />

                        <HeaderLargerProductAndOrderText>
                            {productOrder}
                        </HeaderLargerProductAndOrderText>
                    </HeaderLargerContainerOrder>

                </HeaderLargerContainerProductsAndOrder>
                <HeaderLargerStatus status={machine_status}>
                    <HeaderLargerStatusIcon src={machine_status === "funcionando" ? WorkingIcon : StopedIcon} />
                    <HeaderLargerHalfLineToDivideStatus status={machine_status} />
                    <HeaderLargerStatusText status={machine_status}>
                        {machine_status === 'funcionando' ? 'FUNCIONANDO' : 'PARADA'}
                    </HeaderLargerStatusText>
                </HeaderLargerStatus>
            </HeaderLarger>
            <BodyLarger>

                <RadialBarOne percent={Math.round(76)} value_to_alert_low={30} value_to_alert_high={70} smallSize={false} />
                <BodyLargerInformations>
                    <BodyLargerInformationShift>
                        <GenericText bold size_percent={70}>
                            17:00 &nbsp;
                        </GenericText>
                        <HeaderLargerHalfLineToDivide />
                        <GenericText size_percent={50}>
                            TURNO:&nbsp;
                        </GenericText>
                        <GenericText size_percent={50} bold>
                            09:45 - 17:45
                        </GenericText>
                    </BodyLargerInformationShift>
                    <BodyLargerInformationContainerAprovedAndScrap>
                        <BodyLargerInformationAprovedAndScrap>
                            <GenericText size_percent={45} lineHeiZero >
                                APROVADOS
                            </GenericText>
                            <GenericText size_percent={60} bold lineHeiZero >
                                2.740
                            </GenericText>
                        </BodyLargerInformationAprovedAndScrap>
                        <BodyLargerInformationAprovedAndScrap>
                            <GenericText size_percent={45} lineHeiZero >
                                REFUGO
                            </GenericText>
                            <GenericText size_percent={60} bold lineHeiZero >
                                747
                            </GenericText>

                        </BodyLargerInformationAprovedAndScrap>
                    </BodyLargerInformationContainerAprovedAndScrap>

                    <BodyLargerInformationProductionPerOrder>
                        <GenericText size_percent={50} lineHeiZero >PRODUÇÃO/ORDEM</GenericText>
                        <ProgressBar value={70} />
                        <GenericText size_percent={45} lineHeiZero align="end" ><b>3.487 / </b>10.000</GenericText>
                    </BodyLargerInformationProductionPerOrder>
                </BodyLargerInformations>
            </BodyLarger>




        </LargerMachineContainer>
    )
}
export default LargerMachine;