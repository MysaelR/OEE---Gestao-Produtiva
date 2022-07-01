import { ReactNode, useState } from "react";

import Header from "../components/menu/header";
import { Area, Container, LateralMenu, Page } from "./style";

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {

    const [expand, setExpand] = useState(false);

    return (
        <Container>
            <Header />
            <Area>
                <LateralMenu active={expand}>
                    <button onClick={() => setExpand(!expand)}>expandir</button>
                </LateralMenu>
                <Page>
                    {children}
                </Page>
            </Area>

        </Container>

    )
}