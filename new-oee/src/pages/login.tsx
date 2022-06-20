import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { Console } from "console";
import { useRef, useState } from "react";
import * as Yup from 'yup';

import Code from '../assets/login/code.svg';
import Mail from '../assets/login/mail.svg'
import Password from '../assets/login/password.svg';
import User from '../assets/login/user.svg';
import { PasswordInputLogin } from "../components/inputs/login/password";
import { TextInputLogin } from "../components/inputs/login/text";
import { BodyLogin, ButtonLoginAndRegister, ContainerLogin, FlexDivLogin, FooterLogin, ForgotPassword, GridDivLogin, HeaderLogin, InputErrorMsg, InputLogin, InputLoginAnchor, InputLoginContainer, InputLoginContainerIcon, InputLoginIcon, MaxContainerLateralSpace, NewUserRegister, OptionLogin, OptionLoginSeparateText, OptionLoginText, PrincipalDivLogin, SubTitleRegisterLogin, SystemLogo, TextForgotPassword, TextForgotPasswordInstruction, TitleRegisterLogin } from "../styles/style-login";

export type ValidationError = {
    [key: string]: string;
};

export default function Login() {

    const [selectedLogin, setSelectedLogin] = useState(true);
    const [selectFormToChange, setSelectFormToChange] = useState<number>(1);

    const formRef = useRef<FormHandles>(null);
    // const formRef2 = useRef<FormHandles>(null);
    // const formRef3 = useRef<FormHandles>(null);
    // const formRef4 = useRef<FormHandles>(null);


    interface FormDataLoginUser {
        user: string,
        password: string
    }
    interface FormDataLoginMachine {
        machine_code: string
    }
    interface FormDataRegisterUser {
        user_name: string,
        email: string,
        password: string
    }
    interface FormDataChangePassword {
        email: string
    }

    const handleSubmitLoginUser: SubmitHandler<FormDataLoginUser> = async data => {
        formRef.current?.setErrors({});
        try {
            const schema = Yup.object().shape({
                user: Yup.string().required("Deve conter um usuário!"),
                password: Yup.string().required("deve ter uma senha!").min(10, "Deve conter ao menos 10 caracteres"),
            })
            await schema.validate(data, {
                abortEarly: false,
            })

            // Validation passed
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // Validation failed

                const errorMessages: ValidationError = {};


                err.inner.forEach(error => {
                    if (error.path != undefined) {
                        errorMessages[error.path] = error.message;
                    }
                });
                formRef.current?.setErrors(errorMessages);

            }

        }
    }

    const handleSubmitLoginMachine: SubmitHandler<FormDataLoginMachine> = async data => {
        formRef.current?.setErrors({});
        try {
            const schema = Yup.object().shape({
                machine_code: Yup.string()
                    .matches(/^[a-zA-Z0-9_.-]{4}-?[a-zA-Z0-9_.-]{4}$/, "Deve estar no formato 'XXXX-XXXX'")
                    .required("Preencha o código da maquina!")
                    .min(9, "Deve conter ao menos 9 caracteres no formato 'XXXX-XXXX' ")
                    .max(9, "Não Deve Conter mais de 9 caracteres")

                // .matches(/^(\d{4})+'-'+(\d{4})$/, "Deve estar no formato 'XXXX-XXXX'")

            })
            // console.log(data)
            await schema.validate(data, {
                abortEarly: false
            })

        }

        catch (err) {

            if (err instanceof Yup.ValidationError) {

                const errorMessages: ValidationError = {};

                err.inner.forEach(error => {
                    if (error.path != undefined) {
                        errorMessages[error.path] = error.message;
                    }
                });
                formRef.current?.setErrors(errorMessages);
            }
        }
    }

    const handleSubmitRegisterUser: SubmitHandler<FormDataRegisterUser> = async data => {
        formRef.current?.setErrors({});
        try {
            const schema = Yup.object().shape({
                user_name: Yup.string().required("Deve conter um nome de usuário!").typeError(""),
                email: Yup.string().required("Deve conter um e-mail!").email("Deve ter um formato de email ex: 'xxxx@yyyy.zzz' "),
                password: Yup.string().min(8, "Deve conter ao menos 8 digitos!").required("deve ter uma senha!"),
            })
            console.log(data);
            await schema.validate(data, {
                abortEarly: false
            })
        }

        catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages: ValidationError = {};

                err.inner.forEach(error => {
                    if (error.path != undefined) {
                        errorMessages[error.path] = error.message;
                    }
                });
                formRef.current?.setErrors(errorMessages);
            }
        }
    }

    const handleSubmitChangePassword: SubmitHandler<FormDataChangePassword> = async data => {
        formRef.current?.setErrors({});
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required("Deve conter um e-mail!").email("Deve ter um formato de email ex: 'xxxx@yyyy.zzz' "),
            })
            await schema.validate(data, {
                abortEarly: false
            })
        }
        catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages: ValidationError = {};

                err.inner.forEach(error => {
                    if (error.path != undefined) {
                        errorMessages[error.path] = error.message;
                    }
                });
                formRef.current?.setErrors(errorMessages);
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
    function handleChangeFormFour() {
        setSelectFormToChange(4);
    }





    return (
        <PrincipalDivLogin>
            <ContainerLogin form={selectFormToChange}>

                {/*Cabeçalho da aplicação, contendo a logo do software, e a troca de login entre usuário e maquina */}

                <HeaderLogin form={selectFormToChange}>

                    {selectFormToChange === 1 && (
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
                    )
                    }
                    {selectFormToChange === 2 &&
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
                        )}

                    {selectFormToChange === 3 &&
                        (
                            <MaxContainerLateralSpace>
                                <GridDivLogin form={selectFormToChange}>
                                    <FlexDivLogin>
                                        <SystemLogo form={selectFormToChange} />
                                    </FlexDivLogin>


                                </GridDivLogin>
                                <TitleRegisterLogin>
                                    Crie sua conta
                                </TitleRegisterLogin>
                                <SubTitleRegisterLogin>
                                    Preencha com seus dados
                                </SubTitleRegisterLogin>
                            </MaxContainerLateralSpace>

                        )
                    }
                    {selectFormToChange === 4 ?
                        (
                            <MaxContainerLateralSpace>
                                <GridDivLogin form={selectFormToChange}>
                                    <FlexDivLogin>
                                        <SystemLogo form={selectFormToChange} />
                                    </FlexDivLogin>
                                    <TextForgotPassword>
                                        Informe o e-mail cadastrado para solicitar a recuperação da senha
                                    </TextForgotPassword>
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
                            selectFormToChange === 1 && (
                                <>


                                    <Form ref={formRef} onSubmit={handleSubmitLoginUser}>
                                        <TextInputLogin name='user' errorMsg="" icon={User} placeHolder="USUÁRIO" top={0} type="text" />
                                        <PasswordInputLogin name='password' errorMsg="" placeHolder="SENHA" top={0} onSubmit={() => formRef.current?.submitForm()} />
                                        <ForgotPassword onClick={() => handleChangeFormFour()}>
                                            Esqueci minha senha
                                        </ForgotPassword>
                                    </Form>


                                </>
                            )}
                        {selectFormToChange === 2 &&
                            (
                                <>
                                    {/* <InputErrorMsg active={false}>Código Incorreto</InputErrorMsg>
                                            <InputLoginContainer top={-2} active={false}>
                                                <InputLoginContainerIcon>
                                                    <InputLoginIcon src={Code} />
                                                </InputLoginContainerIcon>
                                                <InputLogin placeholder="CÓDIGO DA MÁQUINA" type={"text"} />
                                            </InputLoginContainer> */}
                                    <Form ref={formRef} onSubmit={handleSubmitLoginMachine}>
                                        <TextInputLogin name='machine_code' errorMsg="" icon={Code} placeHolder="CÓDIGO DA MÁQUINA" top={0} type="text" />
                                    </Form>


                                </>
                            )}
                        {selectFormToChange === 3 &&
                            (
                                <>
                                    {/*                                            <InputErrorMsg active={false}>Informação</InputErrorMsg>
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
                                                </InputLoginContainer> */}
                                    <Form ref={formRef} onSubmit={handleSubmitRegisterUser}>
                                        <TextInputLogin name='user_name' errorMsg="" icon={User} placeHolder="NOME" top={0} type="text" />
                                        <TextInputLogin name='email' errorMsg="" icon={Mail} placeHolder="E-MAIL" top={0} type="text" />
                                        {/* <TextInputLogin name='password' errorMsg="" icon={Password} placeHolder="SENHA" top={0} type="text" /> */}
                                        <PasswordInputLogin name='password' errorMsg="" placeHolder="SENHA" top={0} />
                                    </Form>

                                </>
                            )}
                        {selectFormToChange === 4 ?
                            (
                                <>
                                    {/*                                                     <InputErrorMsg active={false}>Informação</InputErrorMsg>
                                                    <InputLoginContainer top={0} active={false}>
                                                        <InputLoginContainerIcon>
                                                            <InputLoginIcon src={Mail} />
                                                        </InputLoginContainerIcon>
                                                        <InputLogin placeholder="E-MAIL" type={"email"} />
                                                    </InputLoginContainer> */}
                                    <Form ref={formRef} onSubmit={handleSubmitChangePassword}>
                                        <TextInputLogin name="email" errorMsg="" icon={Mail} placeHolder="E-MAIL" top={0} type="email" />
                                    </Form>

                                    <TextForgotPasswordInstruction>
                                        Você recebá um e-mail no endereço informado contendo as instruções para redefinir a senha de acesso.
                                    </TextForgotPasswordInstruction>
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
                            selectFormToChange === 1 &&

                            (
                                <>
                                    <ButtonLoginAndRegister top={5} onClick={() => { formRef.current?.submitForm() }} w={1}>Entrar</ButtonLoginAndRegister>
                                    <FlexDivLogin>
                                        <NewUserRegister form={1} active={false}>Novo usuário? &nbsp;</NewUserRegister>
                                        <NewUserRegister form={1} active onClick={() => handleChangeFormThree()}>Cadastre-se</NewUserRegister>
                                    </FlexDivLogin>
                                </>

                            )}

                        {selectFormToChange === 2 &&
                            (
                                <ButtonLoginAndRegister top={2} onClick={() => { formRef.current?.submitForm() }} w={2}>Entrar</ButtonLoginAndRegister>
                            )}
                        {selectFormToChange === 3 &&
                            (
                                <>
                                    <GridDivLogin form={1}>
                                        <ButtonLoginAndRegister top={1} onClick={() => { formRef.current?.submitForm() }} w={3}>Cadastrar</ButtonLoginAndRegister>
                                        <InputLoginAnchor onClick={() => handleChangeFormOne()} form={selectFormToChange}>
                                            &lt; voltar
                                        </InputLoginAnchor>
                                    </GridDivLogin>


                                </>
                            )}
                        {selectFormToChange === 4 ?
                            (
                                <>
                                    <GridDivLogin form={1}>
                                        <ButtonLoginAndRegister top={0} onClick={() => { formRef.current?.submitForm() }} w={4}>Enviar</ButtonLoginAndRegister>
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


