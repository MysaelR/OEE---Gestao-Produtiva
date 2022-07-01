import { useState } from "react";
import { InputRangeMachineSizeControll } from "./style";




const RangeSizeMachine: React.FC = () => {

    const [value, setValue] = useState(1);

    return (
        <>
            <InputRangeMachineSizeControll type={"range"} min={1} max={3} step={1} onChange={(e) => setValue(parseInt(e.target.value))} />
            {value}
        </>

    )
}
export default RangeSizeMachine