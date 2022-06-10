import { FormHandles, SubmitHandler } from "@unform/core";
import { useState } from "react";

import { BodyLogin, ButtonLoginAndRegister, ContainerLogin, FooterLogin, GridDivLogin, HeaderLogin, InputLogin, InputLoginContainer, MaxContainerLateralSpace, PrincipalDivLogin, TextForgotPassword, TextForgotPasswordInstruction } from "../styles/style-login";

export default function RedefineKey() {


    return (
        <PrincipalDivLogin>
            <ContainerLogin form={5}>
                <HeaderLogin form={5}>
                    <MaxContainerLateralSpace>
                        <TextForgotPassword>
                            Redefinir senha
                        </TextForgotPassword>
                    </MaxContainerLateralSpace>
                </HeaderLogin>
                <BodyLogin form={5}>
                    <MaxContainerLateralSpace>
                        <TextForgotPasswordInstruction>
                            NOVA SENHA DE ACESSO
                        </TextForgotPasswordInstruction>
                        <InputLoginContainer top={0} active={false}>

                            <InputLogin placeholder="" type={"password"} />
                        </InputLoginContainer>
                        <TextForgotPasswordInstruction>
                            CONFIRME SUA SENHA
                        </TextForgotPasswordInstruction>
                        <InputLoginContainer top={0} active={false}>

                            <InputLogin placeholder="" type={"text"} />
                        </InputLoginContainer>
                    </MaxContainerLateralSpace>


                </BodyLogin>
                <FooterLogin form={5}>
                    <MaxContainerLateralSpace>
                        <GridDivLogin form={1}>
                            <ButtonLoginAndRegister top={2}>ENVIAR</ButtonLoginAndRegister>

                        </GridDivLogin>
                    </MaxContainerLateralSpace>

                </FooterLogin>
            </ContainerLogin>
        </PrincipalDivLogin>
    );
}