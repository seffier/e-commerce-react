import React, {JSX} from "react";
import {Container, Stack, ThemeProvider} from "@mui/material";
import {mainTheme} from "../../../../../theme/main";
import {Navbar} from "./navbar";

interface IProps {
    children?: React.ReactNode
}

const MainLayout: React.FC<IProps> = (props): JSX.Element => {
    return (
        <ThemeProvider theme={mainTheme}>
            <Container disableGutters maxWidth={false}>
                <Stack direction={'row'}>
                    <Navbar />
                </Stack>
            </Container>
        </ThemeProvider>
    )
}

export default MainLayout