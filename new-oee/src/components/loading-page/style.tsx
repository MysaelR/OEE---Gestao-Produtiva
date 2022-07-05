import styled from "styled-components";

import Loader from '../../assets/global/loading.svg'

// @import 'sitNSpin.less';


export const ContainerSpinner = styled.div`

box-sizing: border-box;
	text-align: center;
	 position: fixed;
     top: 50%;
	 left: 50%;

     @media only screen and (max-width: 800px) {
        left: 30%;
    }
`
export const TextLoading = styled.p`
    color: #E66B25;
    font-weight: bolder;
    font-size: 130%;

    @media only screen and (min-width: 2000px) {
        font-size: 250%;
    }
    
`

export const Spinner = styled.div`
    :before {
	 transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
	 animation: 750ms rotateBefore infinite linear reverse;
    }

    :after {
	 transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
	 animation: 750ms rotateAfter infinite linear;
}

    :before, :after {
        position: fixed;
    content: '';
    width: 10em;
	 height: 10em;
     top: 55%;
	 left: 50%;
	 transform-style: preserve-3d;
	 transform-origin: 50%;
	 transform: rotateY(50%);
	 perspective-origin: 50% 50%;
	 perspective: 340px;
	 background-size: 10em 10em;
	 background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY2IiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDI2NiAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcxLjUwOCAzLjI1MDAyQzIyNi4yMDggMTIuODU3NyAyOTcuMTEzIDcxLjQ5MTMgMjUwLjg5NiAxMDguNDFDMjE2LjU4MiAxMzUuODIgMTg2LjUyOCA5Ny4wNjI1IDE1Ni44MDEgODUuNzczNUMxMjcuMDczIDc0LjQ4NDQgNzYuODg4NSA4NC4yMTYyIDYwLjEyODkgMTA4LjQxQy0xNS45ODA1IDIxOC4yODEgMTQ1LjI3NyAyOTYuNjY4IDE0NS4yNzcgMjk2LjY2OEMxNDUuMjc3IDI5Ni42NjggLTI1LjQ0OTIgMjU3LjI0MiAzLjM5ODQ0IDEwOC40MUMxNi4zMDcxIDQxLjgxMTQgODQuNzI3NiAtMTEuOTkyMyAxNzEuNTA4IDMuMjUwMDJaIiBmaWxsPSIjRTY2QjI1Ii8+Cjwvc3ZnPgo=');

    }
    @media only screen and (max-width: 800px) {
        :before, :after {

	        left: 30%;

        }
    }
    @media only screen and (min-width: 2000px) {
        :before, :after {
	        width: 20em;
            height: 20em;
            background-size: 20em 20em;
        }
    }

        @keyframes rotateBefore {
        from {
            transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg);
        }
        to {
            transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg);
        }
    }
    @keyframes rotateAfter {
        from {
            transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg);
        }
        to {
            transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg);
        }
    }




`