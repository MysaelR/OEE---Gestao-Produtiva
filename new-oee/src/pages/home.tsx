import { useEffect, useState } from "react";

import IconFilter from '../assets/home/filter_list.svg';
import IconSearch from '../assets/home/searchsearch.svg';
import LargerMachine from "../components/home/machine/larger";
import MediumMachine from "../components/home/machine/medium";
import SmallMachine from "../components/home/machine/small";
import RangeSizeMachine from "../components/home/top/rangeSizeMachine";
import { ButtonAdd, ContainerSearchbarHome, FilterIconSearchbarHome, InputRangeMachineSizeControll, InputSearchbarHome, SearchIconSearchbarHome } from "../components/home/top/style";
import { Theme } from "../theme/theme";
import { useWindowSize } from "../utils/useWindowSize";

export default function Home() {

    const size = useWindowSize();

    return (
        <>

            <LargerMachine width={size.width} height={size.height} />
            <MediumMachine width={size.width} height={size.height} />
            <SmallMachine width={size.width} height={size.height} />            <MediumMachine width={size.width} height={size.height} />


            {/* 

                <ButtonAdd>+ ADICIONAR</ButtonAdd>
                <ContainerSearchbarHome>
                    <SearchIconSearchbarHome src={IconSearch} />
                    <InputSearchbarHome />
                    <FilterIconSearchbarHome src={IconFilter} />

                </ContainerSearchbarHome> */}
            <RangeSizeMachine />


        </>


    );
}