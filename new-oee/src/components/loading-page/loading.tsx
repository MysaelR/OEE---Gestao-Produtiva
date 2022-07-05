import { useState } from "react";

import { ContainerSpinner, Spinner, TextLoading } from "./style";

export default function LoadingPage() {


    return (
        <ContainerSpinner>
            <TextLoading>CARREGANDO</TextLoading>
            <Spinner />
        </ContainerSpinner>

    )
}