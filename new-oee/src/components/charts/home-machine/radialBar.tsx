import InternalRadialBarOne from "./internalRadialBar";
import { useEffect, useState } from "react";
import { Background, VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';

import { RadialBarContainerGlobal } from "../../home/machine/style";

interface RadialBarOneI {
    percent: number,
    value_to_alert_low: number,
    value_to_alert_high: number,
    smallSize: boolean
}


const RadialBarOne: React.FC<RadialBarOneI> = ({ percent, value_to_alert_low, value_to_alert_high, smallSize }) => {


    function getData(percent: number) {
        return [{ x: 1, y: percent }, { x: 100, y: 100 - percent }];
    }

    const [state, setState] = useState({ percent: 25, data: getData(percent) });
    const [state2, setState2] = useState({ percent: 100, data: [{ x: 100, y: 100 }, { x: 0, y: 0 }] });
    const [color, setColor] = useState('');

    useEffect(() => {

        //setState({ percent: percent, data: getData(percent) });
        setState({ percent: percent, data: [{ x: 1, y: percent }, { x: 100, y: 100 - percent }] });
        if (percent <= value_to_alert_low) {
            setColor("#C02B2B");
        }
        else if (percent < value_to_alert_high) {
            setColor("#FEB526");
        } else {
            setColor("#1C8A55")
        }
    }, [percent]);



    return (


        <RadialBarContainerGlobal>
            <svg viewBox="0 0 900 900" width="100%" height="100%" >
                <VictoryPie
                    standalone={false}
                    animate={{ duration: 1000 }}
                    width={900} height={900}

                    data={state2.data}
                    innerRadius={300}
                    cornerRadius={100}
                    labels={() => null}
                    style={{

                        data: {
                            fill: 'lightgray',
                        }

                    }}
                />


                <VictoryPie
                    standalone={false}
                    animate={{ duration: 1000 }}
                    width={900} height={900}
                    data={state.data}

                    innerRadius={300}
                    cornerRadius={100}
                    labels={() => null}
                    style={{

                        data: {
                            color: "#C02B2B",
                            fill: ({ datum }) => {
                                // const color = datum.y > 35 ? "#FEB526" : datum.y > 70 ? "#1C8A55" : "#C02B2B";
                                return datum.x === 1 ? color : "transparent";
                            },
                            fontSize: () => { return 1 },
                            backgroundColor: '#E5E5E5'



                        },

                    }
                    }
                />

                {/*                 <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"

                    x={230} y={230}
                    text={`${Math.round(percent)}%`}
                    style={{
                        fill: color,
                        fontSize: 70,

                    }}

                /> */}


            </svg>

            <InternalRadialBarOne percent={percent} color={color} smallSize={smallSize} />
        </RadialBarContainerGlobal>

    )
}
export default RadialBarOne