import React, {FC, ReactNode} from 'react'
import Header from "../Header";
import Container from "@mui/material/Container";

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {

    return (
        <>
            <Header/>
            <Container
                maxWidth={'xl'}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBlock: 32
                }}>
                {children}
            </Container>

        </>
    )
}

export default Layout
