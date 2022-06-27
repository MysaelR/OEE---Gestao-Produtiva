import { useState } from "react";

import { ProgressBarLoaderDiv, ProgressBarPrincipalDiv } from "./style";

interface ProgressBarI {
    value: number
}

const ProgressBar: React.FC<ProgressBarI> = ({ value }) => {

    return (
        <ProgressBarPrincipalDiv>
            <ProgressBarLoaderDiv value={value}>

            </ProgressBarLoaderDiv>
        </ProgressBarPrincipalDiv>
    )
}
export default ProgressBar