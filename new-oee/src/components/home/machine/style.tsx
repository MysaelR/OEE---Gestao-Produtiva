import styled, { css } from "styled-components";

export const LargerMachineContainer = styled.div`
    border: 1px solid #1C8A55;
    min-width: 299px;
    min-height: 229px;

    max-width: 448.5px; //min-width x 1.5
    max-height: 343.5px; //min-height x 1.5
    width: 22vw;
    height: 30vh;
    border-radius: 4px;

    @media only screen and (max-width: 1000px) {
        width: 30vw;
        height: 20vh;
    } 
    
`