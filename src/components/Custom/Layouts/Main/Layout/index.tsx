import React, {JSX} from "react";
import {Box, Container, Stack, ThemeProvider} from "@mui/material";
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
                <Box component='main' sx={{ flexGrow: 1, p: 0, marginLeft: 20, marginTop: 20 }}>
                    {props.children}
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default MainLayout