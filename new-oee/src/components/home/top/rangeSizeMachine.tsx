import { useEffect, useState } from "react";

import Larger from '../../../assets/home/landscapelarger.svg';
import Small from '../../../assets/home/landscapesmall.svg';
import { InputRangeMachineSizeControll, RangeContainer } from "./style";

interface RangeSizeMachineI {
    size(v: number): void;
}

const RangeSizeMachine: React.FC<RangeSizeMachineI> = ({ size }) => {

    const [value, setValue] = useState(1);

    useEffect(() => {
        size(value);
    }, [value])

    return (
        <>
            <RangeContainer>
                <img src={Small} />
                <InputRangeMachineSizeControll type={"range"} min={1} step={1} max={3} onChange={(e) => setValue(parseInt(e.target.value))} value={value} />
                <img src={Larger} />
            </RangeContainer>
        </>

    )
}
export default RangeSizeMachine