import { useEffect, useState } from "react";

import LargerMachine from "../components/home/machine/larger";
import MediumMachine from "../components/home/machine/medium";
import SmallMachine from "../components/home/machine/small";
import { useWindowSize } from "../utils/useWindowSize";

export default function Home() {

    const size = useWindowSize();

    return (
        <>
            <LargerMachine width={size.width} height={size.height} />
            <MediumMachine width={size.width} height={size.height} />
            <SmallMachine width={size.width} height={size.height} />
        </>


    );
}