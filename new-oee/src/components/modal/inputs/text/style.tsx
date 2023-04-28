import styled from "styled-components";

interface Invalid {
    error: boolean
}

interface InputI {
    focused?: boolean,
    hasText?: boolean
    error?: boolean
}



export const ContainerModalInput = styled.div`
     position: relative;
     align-self: center;
    width: 100%;
     /* min-height: 60px; */

`

export const LabelModalInput = styled.label<InputI>`
    
    position: absolute;
    
   
    line-height: 10px;
    color: ${(element: InputI) => element.focused ? '#1E88E5' : '#878A8C'}; 
    left: 15px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    background-color: ${(element: InputI) => element.focused ? '#FBFBFB' : 'white'};
    padding: 5px;
    box-sizing: border-box;
    pointer-events: none;
    color: ${(element: InputI) => element.error && '#BF464D'};
    top: ${(element: InputI) => element.hasText && element.error ? '15%' : element.hasText && '20%'};
    background-color: ${(element: InputI) => element.hasText && '#FBFBFB'};


`;

export const ModalInputEdited = styled.input<InputI>`
    border: 1px solid ${(element: InputI) => element.error ? '#BF464D' : '#E0E0E0'};
    align-self: center;
    border-radius: 4px;
    color: #878A8C;
    transition: all .1s linear;
    /* width: 91.5%; */
    width: calc(100% - 10px);

    height: 40px;
    min-height: 40px;
    padding-left: 10px;
    /* padding: 1% 4%; */
    background-color: ${(element: InputI) => element.focused ? 'transparent' : 'white'};
    background-color: ${(element: InputI) => element.hasText && 'transparent'};
   

    ::placeholder{
        color: #878A8C; 
    }


    :focus{
        outline: 0;
        border: 1px solid ${(element: InputI) => element.error ? '#BF464D' : '#1E88E5'};
        ::placeholder{
            color: transparent;
        }
    }

    

    
`;


export const ErrorMsg = styled.span`
    color: #BF464D;
    display: ${(element: InputI) => element.error ? 'block' : 'none'};
    line-height: 120%;
    
`