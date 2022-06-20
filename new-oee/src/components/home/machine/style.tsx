import styled, { css } from "styled-components";
import { useWindowSize } from "../../../utils/useWindowSize";


function useSize() {
    const size = useWindowSize();

    return size
}

interface WindowsSize {
    width: number
    height: number
}

export const LargerMachineContainer = styled.div<WindowsSize>`



    border: 1px solid #1C8A55;
    min-width: 299px;
    min-height: 229px;
    max-width: 448.5px; //min-width x 1.5
    max-height: 343.5px; //min-height x 1.5
    border-radius: 4px;
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
    
`

export const MediumMachineContainer = styled.div<WindowsSize>`
    border: 1px solid blue;
    min-width: 215px;
    min-height: 245px;
    border-radius: 4px;
    width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.57) * 215}px;
    height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.57) * 245}px;
    max-width: 322.5px;//min-width x 1.5
    max-height: 490px; //min-height x 1.5

    @media only screen and (min-width: 1800px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 215}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 0.7) * 245}px;
    }

    @media only screen and (min-width: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 215}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 245}px;
    }

    @media only screen and (min-height: 2000px) {
        width: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 215}px;
        height: ${(resolution: WindowsSize) => ((resolution.width / resolution.height) * 3) * 245}px;
    }

    @media only screen and (max-width: 900px) and (max-height: 450px) {
        width: 215px;
        height: 245px;
    }
`


export const SmallMachineContainer = styled.div<WindowsSize>`

    border: 1px solid red;
    min-width: 98px;
    max-width: 196px;
    min-height: 147px;
    max-height: 294px;
    border-radius: 4px;
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



`