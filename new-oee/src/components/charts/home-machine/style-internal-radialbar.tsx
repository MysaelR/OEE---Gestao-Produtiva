import styled from "styled-components";

interface ColorI {
    color: string,
}

interface SmallVisualizationI {
    change?: boolean
}

export const InternalRadialDiv = styled.div`
    position: absolute;
    display: flex;
    width: 45%;
    height: 45%;
    align-items: center;
    justify-content: center;

    font-weight: bolder;

    /* background-color: lightgray ; */


`

export const PercentInternalRadial = styled.p<ColorI & SmallVisualizationI>`
    margin-top: 15%;
    text-align: center;
    /* font-size: clamp(1.4em, 1.5em + 1.5vw, 1.8em); */
    font-size:${(element: SmallVisualizationI) => element.change ? 'clamp(1.5em, 0.5em + 0.5vw, 1.2em)' : 'clamp(1.8em, 1.3em + 1.3vw, 2em)'};
    color: ${(element: ColorI) => element.color};
    border-bottom: 1px solid #C7C7C7;

    @media screen and (max-width: 1500px){
        /* font-size: clamp(1.3em, 1.3em + 1.3vw, 1.8em); */
        font-size:${(element: SmallVisualizationI) => element.change ? 'clamp(1em, 0.5em + 0.5vw, 1em)' : 'clamp(1.3em, 1.3em + 1.3vw, 1.8em)'};
       
    }

    @media screen and (min-width: 2000px){
        font-size: clamp(2em, 2em + 2vw, 2.5em); color: red;
    }
    @media screen and (min-width: 3000px){
        font-size: clamp(2em, 2em + 2vw, 2.5em);
    }

    @media only screen and (max-width: 900px) and (max-height: 450px) {
        font-size:${(element: SmallVisualizationI) => element.change ? 'clamp(1em, 0.5em + 0.5vw, 1em)' : 'clamp(1.3em, 1.3em + 1.3vw, 1.8em)'};
    }
    

`
export const TextOEE = styled.p<SmallVisualizationI>`
    position: absolute;
    top: 45%;
    font-weight: lighter;
    color: #878A8C;
    font-size:${(element: SmallVisualizationI) => element.change ? 'clamp(0.8em, 0.5em + 0.5vw, 0.9em)' : 'clamp(1em, 1em + 1vw, 1.2em)'};


    @media screen and (max-width: 1500px){
        top: 45%;
        /* font-size: clamp(0.8em, 0.8em + 0.8vw, 1.1em); */
        font-size:${(element: SmallVisualizationI) => element.change ? 'clamp(0.6em, 0.5em + 0.5vw, 0.7em)' : 'clamp(0.8em, 0.8em + 0.8vw, 1.1em)'};
    }

  
    

    @media screen and (min-width: 2000px){
        top: 40%;
        font-size: clamp(1em, 1em + 1vw, 1.5em);
    }
    @media screen and (min-width: 3000px){
        font-size: clamp(1em, 1em + 1vw, 1.5em);
    }
    /* color:${(element: SmallVisualizationI) => element.change ? 'red' : 'blue'}; */


`