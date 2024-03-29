import styled, { css } from "styled-components";

import { useWindowSize } from "../../../utils/useWindowSize";
import { getColorByMachineStatus } from "../../../utils/utils";

function useSize() {
    const size = useWindowSize();

    return size
}

interface ActiveI{
    active?: boolean
}

interface WindowsSize {
    width: number
    height: number
}

interface NameLength {
    quantity?: number;
    // quantity2?: number;
}

interface StatusI {
    status: string;
}
interface NumberControll{
    value: number
}
interface TextControllI{
    size_percent?: number,
    bold?: boolean,
    align?: string,
    lineHeiZero?: boolean,
    mtop?: number,

    ajdustSmallScale?: boolean,
}
//TAMANHO DAS MAQUINAS


//#region larger-machine

export const LargerMachineContainer = styled.div<WindowsSize>`
    position: relative;
    border: 1px solid #1C8A55;
    min-width: 299px;
    min-height: 229px;
    max-width: 448.5px; //min-width x 1.5
    max-height: 343.5px; //min-height x 1.5
    border-radius: 4px;

    //#region size-controll
    width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.57) * 299}px;
    height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.57) * 229}px;

    

    @media only screen and (min-width: 1800px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 299}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 229}px;
    }

    @media only screen and (min-width: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 299}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 229}px;
    }

    @media only screen and (min-height: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 299}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 229}px;
    }

    @media only screen and (max-width: 900px) and (max-height: 400px) {
        width: 300px;
        height: 230px;
    }

    //#endregion
    
`
export const GenericText = styled.p<TextControllI>`
    font-size: ${(element: TextControllI) => element.size_percent}%;
    font-weight: ${(element: TextControllI) => element.bold? 'bold' : 'normal'};
    line-height: ${(element: TextControllI) => element.lineHeiZero? 0 : 'normal'};
    text-align: ${(element: TextControllI) => element.align?  element.align === 'center'? 'center' : element.align === 'end'? 'end' : 'left' : ''} ;
    margin-top: ${(element: TextControllI) => element.mtop? element.mtop + '%' : ''};
    @media only screen and (min-width: 1900px){

        font-size: ${(element: TextControllI) => element.size_percent && element.size_percent * 1.2}%;
    }
`

//#region header
export const HeaderLarger = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 37%;
    margin-top: 3%;
    margin-left: 3%;
`
export const HeaderLargerMachineId = styled.p`
    height: 10%;
    margin-top: 0;
    width: 100%;
    color: #2E2F30;
    font-size: 1vh;



    //#region font-size
    @media only screen and (min-width: 700px) and (min-height: 1000px) {
        font-size: clamp(0.5em, 0.4vh + 0.5vw, 1em);
    }

    @media only screen and (min-width: 1080px) and (min-height: 1900px) {
        font-size: 0.5vh;
    }
    @media only screen and (min-height: 2000px) {
        font-size: 0.35vh;
    }

    @media only screen and (max-width: 920px) and (max-height: 450px) {
        font-size: clamp(0.5em, 0.6vh + 0.8vw, 1em);
    }
    @media only screen and (max-width: 2000px) and (max-height: 450px) {
        font-size: clamp(0.5em, 0.6vh + 0.8vw, 1em);
    }
    //#endregion font-size

`
export const HeaderLargerMachineName = styled.p`
    width: 100%;
    margin-top: -10px;
    height: 25%;
    font-weight: 600;
    font-size: 120%;
    border-bottom: 1px solid #C7C7C7;
`


//#region order-and-product

export const HeaderLargerContainerProductsAndOrder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -10px;
    height: 25%;
    max-width: 100%;
    /* background-color: lightskyblue; */
    /* white-space: nowrap;
    overflow: hidden; //faz com que o excedente do texto seja escondido
    text-overflow: ellipsis; //Adiciona reticências  */
`
export const HeaderLargerProductAndOrderIcon = styled.img<ActiveI>`
    height: ${(element : ActiveI) => element.active? 45 : 65}%;
    max-width: 15%;
    min-width: 30px;
`
export const HeaderLargerProductAndOrderText = styled.p<NameLength>`
    margin-left: 5%;
    font-size: 80%;
    font-weight: 400;
    white-space: nowrap;
    overflow: ${(element: NameLength) => element.quantity ? element.quantity > 20 ? 'hidden' : 'visible' : 'hidden'};
    text-overflow: ellipsis;
`
export const HeaderLargerContainerProduct = styled.div`
    display: flex;
    flex-direction: row;
    /* flex: 1; */
    height: 100%;
    margin-right: 3%;
    align-items: center;
    max-width: 44%;
`

export const HeaderLargerHalfLineToDivide = styled.p`
    height: 60%;
    padding-right: 3%;
    border-left: 1px solid #C7C7C7;
`
export const HeaderLargerContainerOrder = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 44%;
    height: 100%;
    /* flex: 1; */
    align-items: center;
    overflow: hidden;
`

//#endregion order-and-product

//#region status
export const HeaderLargerStatus = styled.div<StatusI>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 97%;
    height: 25%;
    margin-top: 1%;
    padding-left: 3%;
    border-radius: 2px;
    background-color: ${(element) => element.status === 'funcionando'? '#DFF6EB' : '#F6DFDF'};
`
export const HeaderLargerStatusIcon = styled.img`
    height: 60%;
    margin-right: 5%;

`
export const HeaderLargerHalfLineToDivideStatus = styled.div<StatusI>`
    height: 70%;
    width: 10px;
    border-left: 1px solid;
    border-color: ${(element: StatusI) => element.status === 'funcionando' ? 'rgba(28, 138, 85, 0.2)' : 'rgba(192, 43, 43, 0.2)'};
`

export const HeaderLargerStatusText = styled.p<StatusI>`
    color: ${(element: StatusI) => element.status === 'funcionando' ? '#1C8A55' : '#C02B2B'};
    font-size: 60%;
`
//#endregion status

//#endregion header


//#region body
export const BodyLarger = styled.div`
    position: relative;
    display: flex;

    flex-direction: row;
    width: 95%;
    height: 57%;
    margin-bottom: 3%;
    margin-left: 3%;
    /* background-color: lightgray; */
`

//RADIAL BAR to Larger

export const RadialBarContainerGlobal = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    width: 50%;
    height: 100%;
    bottom: 0;
    z-index: 1;
`

export const BodyLargerInformations = styled.div`
    /* background-color: lightskyblue; */
    height: 100%;
    max-height:100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 5%;
`
export const BodyLargerInformationShift = styled.div`
    border: 1px solid rgba(193, 194, 195, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    height: 25%;
    margin-top: 5%;
    
`
export const BodyLargerInformationContainerAprovedAndScrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 25%;
    gap: 5%;
`

export const BodyLargerInformationAprovedAndScrap = styled.div`
    border: 1px solid rgba(193, 194, 195, 0.2);
    border-radius: 2px;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 0;
    text-align: center;
`
export const BodyLargerInformationProductionPerOrder = styled.div`
    border: 1px solid rgba(193, 194, 195, 0.2);
    border-radius: 2px;
    height: 25%;
    padding: 5px;

    p:nth-child(1){
        margin-top: 4%;
    }
`
//#endregion body


//#endregion larger-machine





//#region medium-machine
export const MediumMachineContainer = styled.div<WindowsSize>`
position: relative;
    border: 1px solid ${getColorByMachineStatus('Parada')};
    /* min-width: 215px;
    min-height: 245px; */
    min-width: 175px;
    min-height: 234px;
    border-radius: 4px;
    padding: 5px;

    //#region size-controll
    width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.4) * 215}px;
    height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.5) * 245}px;
    max-width: 292px;//min-width x 2
    max-height: 390px; //min-height x 2

    @media only screen and (min-width: 1800px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.55) * 215}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.55) * 245}px;
    }

    @media only screen and (min-width: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.6) * 215}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 245}px;
    }

    @media only screen and (min-height: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 2) * 215}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 2) * 245}px;
    }

    @media only screen and (max-width: 900px) and (max-height: 450px) {
        width: 146px;
        height: 195px;
    }
    //#endregion
`

//#region header
export const HeaderMedium = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 30%;

    margin-left: 3%;
`
export const HeaderMediumMachineId = styled.p`
    height: 10%;
    margin-top: 0;
    width: 100%;
    color: #2E2F30;
    font-size: 0.8vh;
    padding-bottom: 2px;



    //#region font-size
    @media only screen and (min-width: 700px) and (min-height: 1000px) {
        font-size: clamp(0.4em, 0.3vh + 0.4vw, 0.8em);
    }

    @media only screen and (min-width: 1080px) and (min-height: 1900px) {
        font-size: 0.3vh;
    }
    @media only screen and (min-height: 2000px) {
        font-size: 0.30vh;
    }

    @media only screen and (max-width: 920px) and (max-height: 450px) {
        font-size: clamp(0.4em, 0.5vh + 0.7vw, 0.8em);
    }
    @media only screen and (max-width: 2000px) and (max-height: 450px) {
        font-size: clamp(0.4em, 0.5vh + 0.7vw, 0.8em);
    }
    //#endregion font-size

`
export const HeaderMediumMachineName = styled.p`
    width: 100%;
    margin-top: -10px;
    height: 25%;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #C7C7C7;

`

//#region order-and-product

export const HeaderMediumContainerProductsAndOrder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -10px;
    height: 25%;
    max-width: 100%;
    /* background-color: lightskyblue; */
    /* white-space: nowrap;
    overflow: hidden; //faz com que o excedente do texto seja escondido
    text-overflow: ellipsis; //Adiciona reticências  */
`
export const HeaderMediumProductAndOrderIcon = styled.img<ActiveI>`
    height: ${(element : ActiveI) => element.active? 50 : 65}%;
    max-width: 15%;
    min-width: 20px;
`
export const HeaderMediumProductAndOrderText = styled.p<NameLength>`
    margin-left: 5%;
    font-size: 80%;
    font-weight: 400;
    white-space: nowrap;
    overflow: ${(element: NameLength) => element.quantity ? element.quantity > 10 ? 'hidden' : 'visible' : 'hidden'};
    text-overflow: ellipsis;
`
export const HeaderMediumContainerProduct = styled.div`
    display: flex;
    flex-direction: row;
    /* flex: 1; */
    height: 100%;
    margin-right: 3%;
    align-items: center;
    max-width: 44%;
`

export const HeaderMediumHalfLineToDivide = styled.p`
    height: 60%;
    padding-right: 3%;
    border-left: 1px solid #C7C7C7;
`
export const HeaderMediumContainerOrder = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 44%;
    height: 100%;
    /* flex: 1; */
    align-items: center;
    overflow: hidden;
`

//#endregion order-and-product

//#endregion header

//#region body
export const BodyMedium = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 66%;
    margin-bottom: 3%;
    margin-left: 3%;
    margin-top: 2%;

`

export const ContainerBodyMediumProgressBar = styled.div`
    width: 100%;
    height: 80%;
    padding: 0;

    ${RadialBarContainerGlobal}{
        width: 100%;
        margin-top: -10px;
    }
`
export const BodyMediumInformations = styled.div`
width: 97%;
border: 1px solid rgba(193, 194, 195, 0.4);
border-radius: 2px;
height: 24%;
margin-top: -10px;
padding: 1%;
display: flex;



`
export const BodyMediumInformationAproved = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 1%;
`
export const BodyMediumInformationScrap = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 1%;

`
export const BodyMediumInformationProduction = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 1%;
    

`
export const BodyMediumInformationDivider = styled.div`
    border-left: 0.05px solid rgba(0,0,0,0.2);
    margin-right: 5px;
    margin-left: 5px;


`

//#endregion body

//#endregion medium-machine



//#region small-machine

export const SmallMachineContainer = styled.div<WindowsSize>`
    position: relative;
    border: 1px solid ${getColorByMachineStatus('Produzindo')};
    min-width: 98px;
    max-width: 196px;
    min-height: 147px;
    max-height: 294px;
    border-radius: 4px;
    padding: 2px;

    //#region size-controll
    width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.57) * 98}px;
    height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.57) * 147}px;

    @media only screen and (min-width: 1800px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 98}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 147}px;
    }

    @media only screen and (min-width: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 98}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 147}px;
    }

    @media only screen and (min-height: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 98}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 147}px;
    }

    @media only screen and (max-width: 900px) and (max-height: 450px) {
        width: 98px;
        height: 147px;
    }

    //#endregion size-controll

`

//#region header
export const HeaderSmall = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;

    height: 30%;

    margin-left: 5%;
    margin-top: 5%;
`
export const HeaderSmallMachineId = styled.p`
    height: 10%;
    margin-top: 0;
    width: 100%;
    color: #2E2F30;
    font-size: 0.8vh;
    padding-bottom: 2px;
    margin-bottom: 10%;


    //#region font-size
    @media only screen and (min-width: 700px) and (min-height: 1000px) {
        font-size: clamp(0.4em, 0.3vh + 0.4vw, 0.8em);
    }

    @media only screen and (min-width: 1080px) and (min-height: 1900px) {
        font-size: 0.3vh;
    }
    @media only screen and (min-height: 2000px) {
        font-size: 0.30vh;
    }

    @media only screen and (max-width: 920px) and (max-height: 450px) {
        font-size: clamp(0.4em, 0.5vh + 0.7vw, 0.8em);
    }
    @media only screen and (max-width: 2000px) and (max-height: 450px) {
        font-size: clamp(0.4em, 0.5vh + 0.7vw, 0.8em);
    }
    //#endregion font-size

`
export const HeaderSmallMachineName = styled.p`
    width: 100%;
    margin-top: -10px;
    height: 100%;
    font-weight: 600;
    white-space: normal;
    /* overflow: hidden;
    text-overflow: ellipsis; */
    line-height: 1.4;
    border-bottom: 1px solid #C7C7C7;
    margin-bottom: 20px;

`
export const HeaderSmallStatus = styled.div<StatusI>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 97%;
    height: 25%;
    margin-top: -20%;
    padding-left: 3%;
    border-radius: 2px;
    background-color: ${(element) => element.status === 'funcionando'? '#DFF6EB' : '#F6DFDF'};


    @media only screen and (min-width: 1800px){
        margin-top: -12%;
    }
`

export const HeaderSmallStatusText = styled.p<StatusI>`
    color: ${(element: StatusI) => element.status === 'funcionando' ? '#1C8A55' : '#C02B2B'};
    font-size: 50%;

    @media only screen and (min-width: 2040px) {
        font-size: 70%;
    }
`

//#endregion header

//#region body

export const BodySmall = styled.div`
    margin-top: 14%;
    height: 55%; 

    ${RadialBarContainerGlobal}{
        width: 100%;
        
    }

    @media only screen and (max-width: 1400px){
        margin-top: 17%;
    }
    @media only screen and (max-width: 920px) and (max-height: 450px) {
        margin-top: 17%;
    }

`

//#endregion body


//#endregion small-machine


//#region progressBar

export const ProgressBarPrincipalDiv = styled.div`
position: relative;
background-color: #E5E5E5;
width: 100%;
height: 30%;
border-radius: 2px;

`
export const ProgressBarLoaderDiv = styled.div<NumberControll>`
background-color: #878A8C;
width: ${(element: NumberControll) => element.value > 100? 100 : element.value}%;
height: 100%;
border-radius: 2px;
`

//#endregion

