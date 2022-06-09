import { FormHandles, SubmitHandler } from "@unform/core";
import { useRef, useState } from "react";
import * as Yup from 'yup';

import Code from '../assets/login/code.svg';
import Mail from '../assets/login/mail.svg'
import Password from '../assets/login/password.svg';
import User from '../assets/login/user.svg';
import { BodyLogin, ButtonLoginAndRegister, ContainerLogin, FlexDivLogin, FooterLogin, GridDivLogin, HeaderLogin, InputErrorMsg, InputLogin, InputLoginAnchor, InputLoginContainer, InputLoginContainerIcon, InputLoginIcon, MaxContainerLateralSpace, OptionLogin, OptionLoginSeparateText, OptionLoginText, PrincipalDivLogin, SubTitleRegisterLogin, SystemLogo, TitleRegisterLogin } from "../styles/style-login";

export default function Login() {

    const [selectedLogin, setSelectedLogin] = useState(true);
    const [selectFormToChange, setSelectFormToChange] = useState<number>(1);

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

    function handleChangeFormOne() {
        setSelectFormToChange(1);
    }

    function handleChangeFormTwo() {
        setSelectFormToChange(2);
    }
    function handleChangeFormThree() {
        setSelectFormToChange(3);
    }





    return (
        <PrincipalDivLogin>
            <ContainerLogin form={selectFormToChange}>

                {/*Cabeçalho da aplicação, contendo a logo do software, e a troca de login entre usuário e maquina */}

                <HeaderLogin form={selectFormToChange}>

                    {selectFormToChange === 1 ? (
                        <GridDivLogin form={selectFormToChange}>
                            <FlexDivLogin top={6}>
                                <SystemLogo form={selectFormToChange} />
                            </FlexDivLogin>
                            <FlexDivLogin top={5} w={15}>
                                <OptionLogin active={selectedLogin}>
                                    <OptionLoginText onClick={() => handleChangeFormOne()} active={true}>
                                        Usuário
                                    </OptionLoginText>

                                </OptionLogin>
                                <OptionLoginSeparateText active></OptionLoginSeparateText>
                                <OptionLoginSeparateText></OptionLoginSeparateText>
                                <OptionLogin active={!selectedLogin}>
                                    <OptionLoginText onClick={() => handleChangeFormTwo()} active={false}>
                                        Máquina
                                    </OptionLoginText>
                                </OptionLogin>
                            </FlexDivLogin>
                        </GridDivLogin>
                    ) :
                        selectFormToChange === 2 ?
                            (
                                <GridDivLogin form={selectFormToChange}>
                                    <FlexDivLogin top={6}>
                                        <SystemLogo form={selectFormToChange} />
                                    </FlexDivLogin>
                                    <FlexDivLogin top={5} w={15}>
                                        <OptionLogin active={selectedLogin}>
                                            <OptionLoginText onClick={() => handleChangeFormOne()} active={false}>
                                                Usuário
                                            </OptionLoginText>

                                        </OptionLogin>
                                        <OptionLoginSeparateText active></OptionLoginSeparateText>
                                        <OptionLoginSeparateText></OptionLoginSeparateText>
                                        <OptionLogin active={!selectedLogin}>
                                            <OptionLoginText onClick={() => handleChangeFormTwo()} active={true}>
                                                Máquina
                                            </OptionLoginText>
                                        </OptionLogin>
                                    </FlexDivLogin>
                                </GridDivLogin>
                            ) :
                            selectFormToChange === 3 ?
                                (
                                    <MaxContainerLateralSpace>
                                        <GridDivLogin form={selectFormToChange}>
                                            <TitleRegisterLogin>
                                                Crie sua conta
                                            </TitleRegisterLogin>
                                            <SubTitleRegisterLogin>
                                                Preencha com seus dados
                                            </SubTitleRegisterLogin>
                                        </GridDivLogin>
                                    </MaxContainerLateralSpace>

                                ) :
                                (
                                    <>
                                    </>
                                )
                    }


                </HeaderLogin>


                <BodyLogin form={selectFormToChange}>

                    <MaxContainerLateralSpace>
                        {
                            selectFormToChange === 1 ? (
                                <>
                                    <InputErrorMsg active={false}>Usuário incorreto</InputErrorMsg>

                                    <InputLoginContainer top={0} active={false}>
                                        <InputLoginContainerIcon>
                                            <InputLoginIcon src={User} />
                                        </InputLoginContainerIcon>
                                        <InputLogin placeholder="USUÁRIO" />
                                    </InputLoginContainer>

                                    <InputLoginContainer top={8} active={false}>
                                        <InputLoginContainerIcon>
                                            <InputLoginIcon src={Password} />
                                        </InputLoginContainerIcon>
                                        <InputLogin placeholder="SENHA" type={"password"} />
                                    </InputLoginContainer>
                                    <InputLoginAnchor onClick={() => handleChangeFormThree()} form={selectFormToChange}>
                                        Esqueci minha senha
                                    </InputLoginAnchor>
                                </>
                            ) :
                                selectFormToChange === 2 ?
                                    (
                                        <>
                                            <InputErrorMsg active={false}>Código Incorreto</InputErrorMsg>
                                            <InputLoginContainer top={-2} active={false}>
                                                <InputLoginContainerIcon>
                                                    <InputLoginIcon src={Code} />
                                                </InputLoginContainerIcon>
                                                <InputLogin placeholder="CÓDIGO DA MÁQUINA" type={"text"} />
                                            </InputLoginContainer>

                                        </>
                                    ) :
                                    selectFormToChange === 3 ?
                                        (
                                            <>
                                                <InputErrorMsg active={false}>Código Incorreto</InputErrorMsg>
                                                <InputLoginContainer top={0} active={false}>
                                                    <InputLoginContainerIcon>
                                                        <InputLoginIcon src={User} />
                                                    </InputLoginContainerIcon>
                                                    <InputLogin placeholder="NOME" type={"text"} />
                                                </InputLoginContainer>
                                                <InputLoginContainer top={7} active={false}>
                                                    <InputLoginContainerIcon>
                                                        <InputLoginIcon src={Mail} />
                                                    </InputLoginContainerIcon>
                                                    <InputLogin placeholder="E-MAIL" type={"text"} />
                                                </InputLoginContainer>
                                                <InputLoginContainer top={14} active={false}>
                                                    <InputLoginContainerIcon>
                                                        <InputLoginIcon src={Password} />
                                                    </InputLoginContainerIcon>
                                                    <InputLogin placeholder="SENHA" type={"text"} />
                                                </InputLoginContainer>
                                            </>
                                        ) :
                                        (
                                            <>
                                            </>
                                        )
                        }




                    </MaxContainerLateralSpace>
                </BodyLogin>


                <FooterLogin form={selectFormToChange}>
                    <MaxContainerLateralSpace>

                        {
                            selectFormToChange === 1 ?

                                (
                                    <ButtonLoginAndRegister top={5}>ENTRAR</ButtonLoginAndRegister>
                                ) :

                                selectFormToChange === 2 ?
                                    (
                                        <ButtonLoginAndRegister top={0}>ENTRAR</ButtonLoginAndRegister>
                                    ) :
                                    selectFormToChange === 3 ?
                                        (
                                            <>
                                                <GridDivLogin form={1}>
                                                    <ButtonLoginAndRegister top={0}>ENTRAR</ButtonLoginAndRegister>
                                                    <InputLoginAnchor onClick={() => handleChangeFormOne()} form={selectFormToChange}>
                                                        &lt; voltar
                                                    </InputLoginAnchor>
                                                </GridDivLogin>


                                            </>
                                        ) :
                                        (
                                            <></>
                                        )

                        }


                    </MaxContainerLateralSpace>
                </FooterLogin>

            </ContainerLogin>
        </PrincipalDivLogin>
    );
}


