import { useState } from "react";
import WorkingIcon from '../../../assets/machine-list/check.svg';
import OrderIcon from '../../../assets/machine-list/order.svg';
import ProductIcon from '../../../assets/machine-list/product.svg';
import StopedIcon from '../../../assets/machine-list/stop.svg';
import RadialBarOne from "../../charts/home-machine/radialBar";
import { BodyMedium, BodyMediumInformationAproved, BodyMediumInformationDivider, BodyMediumInformationProduction, BodyMediumInformations, BodyMediumInformationScrap, ContainerBodyMediumProgressBar, GenericText, HeaderLargerHalfLineToDivideStatus, HeaderLargerStatus, HeaderLargerStatusIcon, HeaderLargerStatusText, HeaderMedium, HeaderMediumContainerOrder, HeaderMediumContainerProduct, HeaderMediumContainerProductsAndOrder, HeaderMediumHalfLineToDivide, HeaderMediumMachineId, HeaderMediumMachineName, HeaderMediumProductAndOrderIcon, HeaderMediumProductAndOrderText, MediumMachineContainer } from "./style";

interface WindowsSize {
    width: number
    height: number
}

const productName = 'Tênis';
const productOrder = '004sdfa48d45f asdas d aasdaaaaaaaaaaaaaa';
var machine_status = 'parada';

const MediumMachine: React.FC<WindowsSize> = ({ width, height }) => {

    return (
        <MediumMachineContainer width={width} height={height}>
            <HeaderMedium>
                <HeaderMediumMachineId>
                    0000-0000
                </HeaderMediumMachineId>
                <HeaderMediumMachineName>
                    Prensa Menegotto
                </HeaderMediumMachineName>
                <HeaderMediumContainerProductsAndOrder>
                    <HeaderMediumContainerProduct>
                        <HeaderMediumProductAndOrderIcon src={ProductIcon} />
                        <HeaderMediumProductAndOrderText quantity={productName.length}>
                            {productName}
                        </HeaderMediumProductAndOrderText>
                    </HeaderMediumContainerProduct>

                    <HeaderMediumHalfLineToDivide />

                    <HeaderMediumContainerOrder>
                        <HeaderMediumProductAndOrderIcon src={OrderIcon} />

                        <HeaderMediumProductAndOrderText>
                            {productOrder}
                        </HeaderMediumProductAndOrderText>
                    </HeaderMediumContainerOrder>

                </HeaderMediumContainerProductsAndOrder>
                <HeaderLargerStatus status={machine_status}>
                    <HeaderLargerStatusIcon src={machine_status === "funcionando" ? WorkingIcon : StopedIcon} />
                    <HeaderLargerHalfLineToDivideStatus status={machine_status} />
                    <HeaderLargerStatusText status={machine_status}>
                        {machine_status === 'funcionando' ? 'FUNCIONANDO' : 'PARADA'}
                    </HeaderLargerStatusText>
                </HeaderLargerStatus>
            </HeaderMedium>
            <BodyMedium>
                <ContainerBodyMediumProgressBar>
                    <RadialBarOne percent={Math.round(10)} value_to_alert_low={30} value_to_alert_high={70} smallSize={false} />
                </ContainerBodyMediumProgressBar>

                <BodyMediumInformations>
                    <BodyMediumInformationAproved>
                        <GenericText lineHeiZero size_percent={45} align="center">
                            APROVADOS
                        </GenericText>
                        <GenericText lineHeiZero size_percent={49} bold align="center">
                            2.740
                        </GenericText>
                    </BodyMediumInformationAproved>
                    <BodyMediumInformationDivider />
                    <BodyMediumInformationScrap>
                        <GenericText lineHeiZero size_percent={45} align="center">
                            REFUGO
                        </GenericText>
                        <GenericText lineHeiZero size_percent={49} bold align="center">
                            747
                        </GenericText>
                    </BodyMediumInformationScrap>
                    <BodyMediumInformationDivider />
                    <BodyMediumInformationProduction>
                        <GenericText lineHeiZero size_percent={45} align="center">
                            PRODUÇÃO
                        </GenericText>
                        <GenericText lineHeiZero size_percent={49} bold align="center">
                            <b>3.487</b>/10.000
                        </GenericText>
                    </BodyMediumInformationProduction>
                </BodyMediumInformations>
            </BodyMedium>
        </MediumMachineContainer>
    )
}
export default MediumMachine;