import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

interface Props {
    name: string
    label?: string
}


type InputProps = JSX.IntrinsicElements['input'] & Props


const TextInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

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
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span>{error}</span>}

        </>
    );

}

export default TextInput;
