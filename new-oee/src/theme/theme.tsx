import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {

    return (
        { children }
    )
}