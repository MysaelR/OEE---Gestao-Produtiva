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
    approved: number,
    scrap: number,
    rework: number,
    fast_socket_id: string,
    oee: number,
    shifts: { hour_begin: string, hour_end: string }[],
    status: string,
    discount_rework: boolean,
    discount_scrap: boolean,


}

function CalcProduction(rework: boolean, scrap: boolean, approvedV: number, reworkV: number, scrapV: number) {
    let value = 0;
    if (rework) {
        value += reworkV;
    }
    else if (scrap) {
        value += scrapV;
    }
    value += approvedV;
    return value;
}


const LargerMachine: React.FC<WindowsSize & LargerMachineInformationsI> = (
    { width, height, fast_socket_id, name, status, oee, shifts, approved,
        scrap, rework, discount_rework, discount_scrap }) => {

    var production = CalcProduction(discount_rework, discount_scrap, approved, rework, scrap);

    return (
        <LargerMachineContainer width={width} height={height}>
            <HeaderLarger>
                <HeaderLargerMachineId>{fast_socket_id}</HeaderLargerMachineId>
                <HeaderLargerMachineName>{name}</HeaderLargerMachineName>
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
                <HeaderLargerStatus status={status === "Funcionando" || status === "Fora do turno" ? 'funcionando' : 'parada'}>
                    <HeaderLargerStatusIcon src={status === "Funcionando" || status === "Fora do turno" ? WorkingIcon : StopedIcon} />
                    <HeaderLargerHalfLineToDivideStatus status={status} />
                    <HeaderLargerStatusText status={status === "Funcionando" || status === "Fora do turno" ? 'funcionando' : 'parada'}>
                        {status === 'funcionando' || status === "Fora do turno" ? 'FUNCIONANDO' : 'PARADA'}
                    </HeaderLargerStatusText>
                </HeaderLargerStatus>
            </HeaderLarger>
            <BodyLarger>

                <RadialBarOne percent={Math.round(oee)} value_to_alert_low={30} value_to_alert_high={70} smallSize={false} />
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
                            {`${shifts[0].hour_begin} - ${shifts[0].hour_end}`}
                        </GenericText>
                    </BodyLargerInformationShift>
                    <BodyLargerInformationContainerAprovedAndScrap>
                        <BodyLargerInformationAprovedAndScrap>
                            <GenericText size_percent={45} lineHeiZero >
                                APROVADOS
                            </GenericText>
                            <GenericText size_percent={60} bold lineHeiZero >
                                {approved}
                            </GenericText>
                        </BodyLargerInformationAprovedAndScrap>
                        <BodyLargerInformationAprovedAndScrap>
                            <GenericText size_percent={45} lineHeiZero >
                                REFUGO
                            </GenericText>
                            <GenericText size_percent={60} bold lineHeiZero >
                                {scrap}
                            </GenericText>

                        </BodyLargerInformationAprovedAndScrap>
                    </BodyLargerInformationContainerAprovedAndScrap>

                    <BodyLargerInformationProductionPerOrder>
                        <GenericText size_percent={50} lineHeiZero >PRODUÇÃO/ORDEM</GenericText>
                        <ProgressBar value={70} />
                        <GenericText size_percent={45} lineHeiZero align="end" ><b>{production} / </b>10.000</GenericText>
                    </BodyLargerInformationProductionPerOrder>
                </BodyLargerInformations>
            </BodyLarger>




        </LargerMachineContainer>
    )
}
export default LargerMachine;