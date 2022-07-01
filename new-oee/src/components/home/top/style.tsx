import styled, { css } from "styled-components";

export const ButtonAdd = styled.button`
min-height: 22.4px;
min-width: 102.2px;
height: 32px;
width: 146px;
border: none;
border-radius: 4px;
background-color: rgba(5, 37, 84, 1);
color: white;
cursor: pointer;
`

export const ContainerSearchbarHome = styled.div`
    position: relative;
    width: 46%;
    height: 28px;
    border: 1px solid rgba(233, 233, 233, 1);
    display: flex;
    align-content: center;
    align-items: center;
    border-radius: 4px;

`

export const SearchIconSearchbarHome = styled.img`
    height: 60%;
    margin-left: 5px;

`

export const FilterIconSearchbarHome = styled.img`
position: relative;
height: 40%;
margin-right: 5px;
cursor: pointer;


`
export const InputSearchbarHome = styled.input`
    width: 100%;
    position: relative;
    border: none;
    padding-left: 15px;
    :focus{
        outline: 0;
        border: none;
    }
`

export const InputRangeMachineSizeControll = styled.input`

    cursor: pointer;
    -webkit-appearance: none;
     width: 120px;

    ::-webkit-slider-runnable-track{
        height: 3px;
        cursor: default;
        background: #0c4394;
    }


    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        border-radius: 15px;
        border: 1px solid #0c4394;
        background-color: #FFFCFC;
        margin-top: -5px;
        cursor: pointer;
        
        
    }
   



 
`