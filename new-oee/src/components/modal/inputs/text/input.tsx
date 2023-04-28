import { useField } from "@unform/core";
import { useEffect, useRef, useState } from "react";

import { ContainerModalInput, ErrorMsg, LabelModalInput, ModalInputEdited } from "./style";

interface InputComponentI {
    name: string,
    placeholder: string,
    errorMsg: string,
    value: (v: string) => void,
    hasText?: boolean
    type: string
    onSubmit?: () => void
}

const ModalInputComponent: React.FC<InputComponentI> = ({ name, placeholder, errorMsg, value, hasText, type, onSubmit, ...rest }) => {

    const [focused, setFocused] = useState(false);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    const [localValue, setLocalValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        value(localValue)
    }, [localValue]);

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
        <ContainerModalInput>
            <ModalInputEdited ref={inputRef} id={fieldName} defaultValue={defaultValue} error={!!error} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={(e) => setLocalValue(e.target.value)} focused={focused} hasText={hasText} type={type} onSubmit={onSubmit} />
            {/* <LabelModalInput focused={focused} error={!!error} hasText={!!hasText}>{placeholder}</LabelModalInput> */}

            <ErrorMsg error={!!error}>{error}</ErrorMsg>
        </ContainerModalInput>
    )
}

export default ModalInputComponent;