import Select from 'react-select';
import styled from "styled-components";


interface Invalid {
    error: boolean
}


export const ContainerModalSelect = styled.div`
    position: relative;
    align-self: center;
    width: 100%;
    flex: 1;
`

export const SelectContainer = styled(Select)`
    margin-top: 4%;
    
    .css-1s2u09g-control{
        border-color: #E0E0E0;

        height: 20px!important;
    }

    span{
        display: none;
    }
`