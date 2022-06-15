import { useField } from "@unform/core";
import { ReactNode, useEffect, useRef, useState } from "react";

import { InputErrorMsg, InputLogin, InputLoginAndErrorContainer, InputLoginContainer, InputLoginContainerIcon, InputLoginIcon } from "../../../styles/style-login";

interface TextInputLoginI {
    name: string
    label?: string
    top: number
    errorMsg: string
    icon: string
    type: string
    placeHolder: string
}

/* 
type InputProps = JSX.IntrinsicElements['input'] & TextInputLoginI

const inputRef = useRef<HTMLInputElement>(null)
const { fieldName, defaultValue, registerField, error } = useField(name) 
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


*/




export const TextInputLogin: React.FC<TextInputLoginI> = ({ name, label, top, errorMsg, icon, type, placeHolder, ...rest }) => {


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
                        <InputLoginIcon src={icon} />
                    </InputLoginContainerIcon>
                    <InputLogin ref={inputRef} id={fieldName} defaultValue={defaultValue} placeholder={placeHolder} type={type} />

                </InputLoginContainer>
            </InputLoginAndErrorContainer>


        </>
    );
}