import { useState } from "react";

import { InternalRadialDiv, PercentInternalRadial, TextOEE } from "./style-internal-radialbar";

interface InternalRadialBarOneI {
    percent: number,
    color: string,
    smallSize?: boolean
}

const InternalRadialBarOne: React.FC<InternalRadialBarOneI> = ({ percent, color, smallSize }) => {

    return (

        <InternalRadialDiv>
            <PercentInternalRadial color={color} change={smallSize}>
                {percent}%
            </PercentInternalRadial>
            <TextOEE change={smallSize}>
                OEE
            </TextOEE>

        </InternalRadialDiv>
    )
}

export default InternalRadialBarOne;