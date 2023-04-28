import { useField } from "@unform/core";
import { useEffect, useRef, useState } from "react";
// import ReactSelect, { Props as SelectProps } from 'react-select';
import { Props as SelectProps } from 'react-select';

import { ContainerModalSelect, SelectContainer } from "./style";

type OptionI = { value: string, label: string };


interface InputComponentI extends SelectProps {
    name: string,
    placeholder: string,
    errorMsg: string,
    getLocalValue: (v: OptionI | undefined) => void,
    onSubmit?: () => void,
    options: OptionI[]
}

//<InputComponentI>
//{ name, placeholder, errorMsg, value, hasText, type, onSubmit, ...rest }
// interface SelectPropsI<
//     Option = unknown,
//     IsMulti extends boolean = false,
//     Group extends GroupBase<Option> = GroupBase<Option>
//     > {
//     name: string
// }
// interface Props extends SelectProps<OptionTypeBase> {
//     name: string;
// }

const ModalInputSelectComponent: React.FC<InputComponentI> = ({ name, placeholder, options, getLocalValue, ...rest }) => {

    const { fieldName, defaultValue, registerField, error } = useField(name);
    const [localValue, setLocalValue] = useState<OptionI>();
    // const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef(null);


    // useEffect(() => {
    //     value(localValue)
    // }, [localValue]);



    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,

            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        // return [];
                        return localValue?.value
                    }
                    // return ref.state.value.map((option: SelectProps) => option.value);
                    return localValue?.value
                }
                // if (!ref.state.value) {
                //     return '';
                // }
                if (!ref.state.value) {
                    // return ref.props.options;
                }
                // return ref.state.value.value;
            },
        });

        // console.log(selectRef.current)
    }, [fieldName, registerField, rest.isMulti]);




    return (
        <ContainerModalSelect >

            <SelectContainer defaultValue={defaultValue} options={options} value={localValue} onChange={(e) => { setLocalValue(e as OptionI); getLocalValue(e as OptionI) }} placeholder={placeholder} ref={selectRef} {...rest} classNamePrefix='react-select' />

            {/* <SelectContainer name={name} options={options} value={localValue} onChange={(e) => { setLocalValue(e as OptionI) }} placeholder={placeholder} ref={selectRef} {...rest} classNamePrefix='react-select' /> */}

        </ContainerModalSelect>
    )
}

export default ModalInputSelectComponent