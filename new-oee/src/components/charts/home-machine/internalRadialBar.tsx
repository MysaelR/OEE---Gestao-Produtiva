import { useState } from "react";

import { InternalRadialDiv, PercentInternalRadial, TextOEE } from "./style-internal-radialbar";

interface InternalRadialBarOneI {
    percent: number,
    color: string
}

const InternalRadialBarOne: React.FC<InternalRadialBarOneI> = ({ percent, color }) => {

    return (

        <InternalRadialDiv>
            <PercentInternalRadial color={color}>
                {percent}%
            </PercentInternalRadial>
            <TextOEE>
                OEE
            </TextOEE>

        </InternalRadialDiv>
    )
}

export default InternalRadialBarOne;