import IconFilter from '../assets/home/filter_list.svg';
import IconSearch from '../assets/home/searchsearch.svg';
import { useCallback, useEffect, useState } from "react";

import LargerMachine from "../../components/home/machine/larger";
import MediumMachine from "../../components/home/machine/medium";
import SmallMachine from "../../components/home/machine/small";
import TopHome from "../../components/home/top";
import RangeSizeMachine from "../../components/home/top/rangeSizeMachine";
import { ButtonAdd, ContainerSearchbarHome, FilterIconSearchbarHome, InputRangeMachineSizeControll, InputSearchbarHome, SearchIconSearchbarHome } from "../../components/home/top/style";
import LoadingPage from '../../components/loading-page/loading';
import { listWorkstationsBegin } from "../../services/workstations";
import { MachinesContainerHome } from "../../styles/style-home";
import { Theme } from "../../theme/theme";
import { useWindowSize } from "../../utils/useWindowSize";
import { ModalAddMachine } from "./modal";

interface MachineI {
    approved: number,
    arrayOfData: string[], //
    discount_rework: boolean,
    discount_scrap: boolean,
    fast_socket_id: string, //
    id: string,
    name: string,
    oee: number,
    production_per_hour: number,
    rework: number,
    scrap: number,
    shifts: { hour_begin: string, hour_end: string }[], //
    status: string,
    status_code: string,
    suppression_data: string, //
}

const fakeMachine: MachineI = {
    approved: 4200,
    arrayOfData: ['100', '120', '80', '100'], //
    discount_rework: false,
    discount_scrap: false,
    fast_socket_id: '175454', //
    id: 'A483112aMvwrA540',
    name: 'Maquina Teste',
    oee: 75,
    production_per_hour: 100,
    rework: 10,
    scrap: 2,
    shifts: [{ hour_begin: '08:00', hour_end: '15:00' }],
    status: 'Fora do turno',
    status_code: '01',
    suppression_data: '00:00',
}

export default function Home() {

    const size = useWindowSize();
    const [machineSize, setMachineSize] = useState(1);
    const [dataWorkstations, setDataWorkstations] = useState<MachineI[]>([fakeMachine]);
    const [loading, setLoading] = useState(true);



    const getListWorkstations = useCallback(async () => {
        const res = await listWorkstationsBegin();
        setDataWorkstations(res.object_list);
        console.log(res.object_list);
        // listAllMachineOn(res);
    }, []);



    useEffect(() => {
        dataWorkstations && setLoading(false)
    }, [dataWorkstations])


    useEffect(() => {
        getListWorkstations();
        /*    const time = setInterval(() => {
             getListWorkstations();
           }, 60000);
           return () => {
             clearInterval(time);
           }; */
    }, []);



    return (
        <>

            {loading ?
                (
                    <LoadingPage />
                ) :

                (
                    <>
                        <ModalAddMachine />
                        <TopHome size={(v) => setMachineSize(v)} />

                        {machineSize === 1 &&

                            <MachinesContainerHome>
                                {
                                    dataWorkstations && dataWorkstations.map((workstation: MachineI) => (
                                        <LargerMachine
                                            key={workstation.id}
                                            width={size.width}
                                            height={size.height}
                                            fast_socket_id={workstation.fast_socket_id}
                                            name={workstation.name}
                                            status={workstation.status}
                                            approved={workstation.approved}
                                            oee={workstation.oee}
                                            discount_rework={workstation.discount_rework}
                                            discount_scrap={workstation.discount_scrap}
                                            rework={workstation.rework}
                                            scrap={workstation.scrap}
                                            shifts={workstation.shifts}
                                        />
                                    ))
                                }

                                {/* <LargerMachine width={size.width} height={size.height} />
                <LargerMachine width={size.width} height={size.height} />
                <LargerMachine width={size.width} height={size.height} />
                <LargerMachine width={size.width} height={size.height} />
                <LargerMachine width={size.width} height={size.height} /> */}



                            </MachinesContainerHome>

                        }

                        {machineSize === 2 &&

                            <MediumMachine width={size.width} height={size.height} />
                        }

                        {machineSize === 3 &&
                            <SmallMachine width={size.width} height={size.height} />

                        }


                    </>

                )
            }


            {/* 
                      <MediumMachine width={size.width} height={size.height} /> */}

        </>


    );
}