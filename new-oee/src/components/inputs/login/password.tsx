import { useField } from "@unform/core";
import { useEffect, useRef, useState } from "react";

import VisibilityOff from '../../../assets/login/visibility_off.svg'
import Visibility from '../../../assets/login/visibility_on.svg'
import { InputErrorMsg, InputLoginAndErrorContainer, InputLoginContainer, InputLoginContainerIcon, InputLoginIcon, InputPasswordLogin } from "../../../styles/style-login";

interface PasswordInputLoginI {
    name: string
    label?: string
    top: number
    errorMsg: string
    placeHolder: string
    onSubmit?: () => void;
}



export const PasswordInputLogin: React.FC<PasswordInputLoginI> = ({ name, label, top, errorMsg, placeHolder, onSubmit, ...rest }) => {

    const [visible, setVisible] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null)

    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])



    return (
        <>
            <InputLoginAndErrorContainer>
                {/* <InputErrorMsg active>{errorMsg}</InputErrorMsg>
                <InputLoginContainer top={top} active={!!errorMsg}> */}

                <InputErrorMsg active>{error}</InputErrorMsg>
                <InputLoginContainer top={top} active={!!error}>

                    <InputLoginContainerIcon>
                        <InputLoginIcon src={visible ? Visibility : VisibilityOff} onClick={() => setVisible(!visible)} active />
                    </InputLoginContainerIcon>
                    <InputPasswordLogin ref={inputRef} id={fieldName} defaultValue={defaultValue} placeholder={placeHolder} type={visible ? 'text' : 'password'} onSubmit={onSubmit} />
                </InputLoginContainer>
            </InputLoginAndErrorContainer>
        </>
    )
}