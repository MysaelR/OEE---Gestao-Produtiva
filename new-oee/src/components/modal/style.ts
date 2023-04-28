import styled from "styled-components";

export const AlignCenterStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
`

export const ModalContainer = styled.div`
    position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 999;
	opacity:1;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    


`