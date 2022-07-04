import styled from "styled-components";

interface ActiveI {
    active: boolean
}
interface SelectedI {
    selected: boolean
}

export const HeaderContainer = styled.div`
    background-color: #F4F4F4;
    height: 10vh;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 12px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const MenuIconHeader = styled.img<ActiveI>`
    cursor: pointer;
    height: 50%;
    margin-left: 1%;
    display: ${(element: ActiveI) => element.active ? 'block' : 'none'};

    @media only screen and (min-width: 800px) {
        display: none;
    }
`
export const LogoIconHeader = styled.img`
    margin-left: 10%;
`
export const ContainerUserHeader = styled.div`
    position: relative;
    display: flex;
    left: 45%;
    width: 20%;
    height: 80%;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`

export const PhotoContainerUserHeader = styled.img`
    border-radius: 50%;
    border: 1px solid white;
    width: 20%;
    min-width: 50px;
`
export const UserAndWorkContainerUserHeader = styled.div`
    width: 70%;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`
export const UserTextContainerUserHeader = styled.p`
    line-height: 0;
    color: #052554;
    font-weight: bolder;
    font-size: 120%;
`
export const WorkTextContainerUserHeader = styled.p`
line-height: 0;
color: #052554;
`


export const LateralMenu = styled.div`
    flex: 1;
    display: flex;

  
    flex-direction: column;
    background-color: #F4F4F4;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 12px 12px 0px;
    max-width: ${(element: ActiveI) => element.active ? '250px' : '70px'};
    height: 60vh;
    min-height: 400px;
    margin-top: 5vh;
    word-break: break-all;
    padding-bottom: 5vh;
    padding-top: 15vh;
    transition: 0.3s;
    /* visibility: hidden; */
    @media only screen and (max-width: 800px) {
        display: none;
    }

`

export const OptionLateralMenu = styled.div<ActiveI & SelectedI>`
    height: 4vh;
    min-height: 30px;
    width: ${(element: ActiveI) => element.active ? '90' : '80'}%;
    margin-top: ${(element: ActiveI) => element.active ? '10' : '30'}%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(element: SelectedI) => element.selected ? '#FFFFFF' : 'none'};
    border-bottom: ${(element: SelectedI) => element.selected ? '2px solid #E66B25' : 'none'};
    border-radius: 0px 3px 3px 0px;
    box-sizing: border-box;
    cursor: pointer;
    /* padding: 20%; */

    img{
        width: ${(element: ActiveI) => element.active ? '10' : '50px'}%;
        margin-right: ${(element: ActiveI) => element.active ? '10' : '0'}px;
        margin-left: ${(element: ActiveI) => element.active ? '20' : '25'}%;
        transition: width 0.2s;
    }
    p{
        width: ${(element: ActiveI) => element.active ? '70' : '30'}%;
        display: ${(element: ActiveI) => element.active ? 'block' : 'none'};
    }

`
export const IconOptionLateralMenu = styled.img`

`
export const TextOptionLateralMenu = styled.p<ActiveI>`
    color: #052554;
    font-size: 90%;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const LineDivideOptionLateralMenu = styled.div<ActiveI>`
    width: 80%;
    margin-left: 10%;
    margin-top: 20vh;
    border-bottom: 1px solid #cecece;
`


export const MobileMenuContainer = styled.div<ActiveI>`
     flex: 1;
    display: ${(element: ActiveI) => element.active ? 'flex' : 'none'};
    min-width: 200px;
    max-width: 250px;
    min-height: 420px;
    max-height: 480px;
    position: absolute;
    flex-direction: column;
    background-color: #F4F4F4;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    height: 60vh;
    z-index: 5;

`
export const LineDivideOptionMobileMenu = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 25%;
    border-bottom: 1px solid #cecece;
`


