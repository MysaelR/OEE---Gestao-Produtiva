import { useState } from "react";

import { Container, ContainerBase, ContainerLogin, ContainerMed, ContainerTop, FlexDivLogin, GridDivLogin, HeaderLogin, HeaderLoginText, PrincipalDivLogin } from "../styles/style-login";

export default function Login() {



    return (
        <PrincipalDivLogin>
            <ContainerLogin>
                <HeaderLogin>
                    <GridDivLogin>
                        <FlexDivLogin>
                            <HeaderLoginText size={7} bolder lHeight={60}>
                                OEE
                            </HeaderLoginText>
                            <HeaderLoginText size={1.72} lHeight={100}>
                                SISTEMA DE<br />
                                GESTÃO DA<br />
                                PRODUÇÃO
                            </HeaderLoginText>
                        </FlexDivLogin>

                    </GridDivLogin>

                </HeaderLogin>
            </ContainerLogin>
        </PrincipalDivLogin>
    );
}



{/* <Container>
<ContainerTop>
    SISTEMA DE
</ContainerTop>
<ContainerMed>
    GESTÃO DA
</ContainerMed>
<ContainerBase>
    PRODUÇÃO
</ContainerBase>
</Container> */}