import { FormHandles, SubmitHandler } from "@unform/core";
import { useRef, useState } from "react";
import * as Yup from 'yup';
import User from '../assets/login/user.svg';
import Password from '../assets/login/password.svg';

import { BodyLogin, ButtonLoginAndRegister, ContainerLogin, FlexDivLogin, FooterLogin, GridDivLogin, HeaderLogin, InputLogin, InputLoginAnchor, InputLoginContainerIcon, InputLoginIcon, MaxContainerLateralSpace, OptionLogin, OptionLoginSeparateText, OptionLoginText, PrincipalDivLogin, SystemLogo } from "../styles/style-login";

export default function Login() {

    const [selectedLogin, setSelectedLogin] = useState(true);

    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async data => {

        try {
            const schema = Yup.object().shape({
                user: Yup.string().typeError("").required("Deve conter um usuário!"),
                password: Yup.string().required("deve ter uma senha!"),
            })
            await schema.validate(data, {
                abortEarly: false,
            })

            // Validation passed
            console.log(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // Validation failed
                console.log(err.errors);
            }
        }


    }





    return (
        <PrincipalDivLogin>
            <ContainerLogin>

                {/*Cabeçalho da aplicação, contendo a logo do software, e a troca de login entre usuário e maquina */}
                <HeaderLogin>
                    <GridDivLogin>
                        <FlexDivLogin top={6}>
                            <SystemLogo />
                        </FlexDivLogin>
                        <FlexDivLogin top={5} w={15}>
                            <OptionLogin active={selectedLogin} bRight>
                                <OptionLoginText onClick={() => { setSelectedLogin(true) }} active={selectedLogin}>
                                    Usuário
                                </OptionLoginText>

                            </OptionLogin>
                            <OptionLoginSeparateText active></OptionLoginSeparateText>
                            <OptionLoginSeparateText></OptionLoginSeparateText>
                            <OptionLogin active={!selectedLogin}>
                                <OptionLoginText onClick={() => { setSelectedLogin(false) }} active={!selectedLogin}>
                                    Máquina
                                </OptionLoginText>
                            </OptionLogin>
                        </FlexDivLogin>
                    </GridDivLogin>
                </HeaderLogin>


                <BodyLogin>
                    <MaxContainerLateralSpace>
                        <InputLogin top={2}>
                            <InputLoginContainerIcon>
                                <InputLoginIcon src={User} />
                            </InputLoginContainerIcon>
                        </InputLogin>
                        <InputLogin top={10}>
                            <InputLoginContainerIcon>
                                <InputLoginIcon src={Password} />
                            </InputLoginContainerIcon>
                        </InputLogin>
                        <InputLoginAnchor>
                            Esqueci minha senha
                        </InputLoginAnchor>


                    </MaxContainerLateralSpace>
                </BodyLogin>
                <FooterLogin>
                    <MaxContainerLateralSpace>

                        <ButtonLoginAndRegister>ENTRAR</ButtonLoginAndRegister>
                    </MaxContainerLateralSpace>
                </FooterLogin>

            </ContainerLogin>
        </PrincipalDivLogin>
    );
}


