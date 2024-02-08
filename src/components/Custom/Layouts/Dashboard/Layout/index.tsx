import { ThemeProvider } from "@emotion/react";
import { Box, Container, Stack } from "@mui/material";
import React, {JSX} from "react";

import { mainTheme } from "../../../../../theme/main";
import Navbar from "./navbar";

interface IProps {
    children?: React.ReactNode
}

const DashboardLayout: React.FC<IProps> = (props): JSX.Element => {
    return (
        <ThemeProvider theme={mainTheme}>
            <Container disableGutters maxWidth={false}>
                    <Stack>
                        <Navbar />
                    </Stack>
                    <Box component='main' sx={{ flexGrow: 1, p: 0, marginLeft: 100, marginTop: 20 }}>
                        {props.children}
                    </Box>
            </Container>
        </ThemeProvider>
    )
}

export default DashboardLayout