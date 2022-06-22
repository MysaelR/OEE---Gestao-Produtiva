import { useState } from "react";

import { ProgressBarLoaderDiv, ProgressBarPrincipalDiv } from "./style";

const ProgressBar: React.FC = () => {

    return (
        <ProgressBarPrincipalDiv>
            <ProgressBarLoaderDiv value={50}>

            </ProgressBarLoaderDiv>
        </ProgressBarPrincipalDiv>
    )
}
export default ProgressBar