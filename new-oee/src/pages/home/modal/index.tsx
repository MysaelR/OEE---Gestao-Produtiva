import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useRef, useState } from "react";

import Modal from "../../../components/modal";
import ModalInputComponent from "../../../components/modal/inputs/text/input";
import { ContainerColumn, ContainerFlexBox, ContainerModalAddMachine, ContainerRow, InputDescription, InputSubDescription, PaddingContainer, Title } from "./style";

const ModalAddMachine: React.FC = () => {

    const [machineName, setMachineName] = useState('');
    const formRef = useRef<FormHandles>(null);

    return (
        <Modal>
            <ContainerModalAddMachine>
                <PaddingContainer>
                    <Form ref={formRef} onSubmit={() => { }}>


                        <Title>Cadastrar nova máquina</Title>
                        <ContainerColumn>
                            <InputDescription>Nome da máquina</InputDescription>
                            <ModalInputComponent name="name" errorMsg="preencha o campo!" placeholder="" type="text" value={setMachineName} />
                        </ContainerColumn>

                        <ContainerFlexBox flexDirection="row" gap={18}>
                            <ContainerFlexBox flexDirection="column" flex={1}>
                                <InputDescription>Taxa produção/h</InputDescription>
                                <ModalInputComponent name="productionPerHour" errorMsg="preencha o campo!" placeholder="" type="text" value={setMachineName} />
                            </ContainerFlexBox>

                            <ContainerFlexBox flexDirection="row" flex={1} gap={18}>
                                <ContainerFlexBox flexDirection="column" position="relative">
                                    <InputDescription>Meta OEE%</InputDescription>
                                    <InputSubDescription>Bom acima de:</InputSubDescription>
                                    <ModalInputComponent name="good" errorMsg="preencha o campo!" placeholder="" type="text" value={setMachineName} />
                                </ContainerFlexBox>
                                <ContainerFlexBox flexDirection="column" position="relative">
                                    <InputDescription>&nbsp;</InputDescription>
                                    <InputSubDescription>Ruim abaixo de:</InputSubDescription>
                                    <ModalInputComponent name="bad" errorMsg="preencha o campo!" placeholder="" type="text" value={setMachineName} />

                                </ContainerFlexBox>
                            </ContainerFlexBox>
                        </ContainerFlexBox>


                    </Form>



                </PaddingContainer>
            </ContainerModalAddMachine>
        </Modal>
    )
}

export { ModalAddMachine }