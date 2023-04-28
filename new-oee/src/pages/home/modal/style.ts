import styled from "styled-components";

interface IGapPx{
    px: number
}


interface IFlexBox{
    flexDirection: 'row' | 'column',
    gap?: number,
    flex?: number,
    position?: 'absolute' | 'relative'
}

export const ContainerModalAddMachine = styled.div`
    min-width: 300px;
    min-height: 500px;
    width: 638px;
    height: 491px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;

`

export const PaddingContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 64px;
    width: 100%auto;
    height: 100%;
`

export const Title = styled.p`
    color: rgba(230, 107, 37, 1);
    font-weight: 600;
    font-size: 24px;
`

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerRow = styled.div<IGapPx>`
    display: flex;
    flex-direction: row;
    gap: ${(e) => e.px}px;

`

export const ContainerFlexBox = styled.div<IFlexBox>`
    display: flex;
    flex-direction: ${(e: IFlexBox) => e.flexDirection};
    gap: ${(e) => e.gap}px;
    flex: ${(e) => e.flex};
    position: ${(e) => e.position};
`

export const InputDescription = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: rgba(135, 138, 140, 1);
`

export const InputSubDescription = styled.div`
    position: absolute;
    font-size: 8px;
    color: rgba(199, 199, 199, 1);
    bottom: 45px;
    
`