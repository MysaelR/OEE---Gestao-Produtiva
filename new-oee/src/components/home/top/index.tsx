import { useEffect, useState } from "react";

import IconFilter from '../../../assets/home/filter_list.svg';
import IconSearch from '../../../assets/home/searchsearch.svg';
import RangeSizeMachine from "./rangeSizeMachine";
import { ButtonAdd, ContainerSearchbarHome, ContainerTop, ContainerTopMachinesAndButton, ContainerTopSearchAndRanger, FilterIconSearchbarHome, InputSearchbarHome, SearchIconSearchbarHome, TitleHome } from "./style";

interface TopHomeI {
    size(v: number): void;

}

const TopHome: React.FC<TopHomeI> = ({ size }) => {

    const [machineSize, setMachineSize] = useState(1);

    useEffect(() => {
        size(machineSize);
    }, [machineSize])

    return (
        <>
            <ContainerTop>
                <ContainerTopMachinesAndButton>
                    <TitleHome>Máquinas Listadas</TitleHome>
                    <ButtonAdd>+ ADICIONAR</ButtonAdd>
                </ContainerTopMachinesAndButton>
                <ContainerTopSearchAndRanger>
                    <ContainerSearchbarHome>
                        <SearchIconSearchbarHome src={IconSearch} />
                        <InputSearchbarHome />
                        <FilterIconSearchbarHome src={IconFilter} />

                    </ContainerSearchbarHome>
                    <RangeSizeMachine size={(v) => setMachineSize(v)} />
                </ContainerTopSearchAndRanger>


            </ContainerTop>


        </>
    )
}
export default TopHome;