import React, {JSX} from "react";
import {Grid, Stack, Typography, Toolbar, useTheme, IconButton, Tooltip, Box, Avatar} from "@mui/material";
import {styled} from "@mui/material/styles";
import MuiAppBar from '@mui/material/AppBar'
import Basket from "../../../ShoppingCart";


const AppBar = styled(MuiAppBar)(({
                     theme
                 }) => ({
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    })
}))

export const Navbar = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget)
    }
    const theme = useTheme()
    return (
        <Grid xs={12} item container justifyContent='end'>
            <AppBar position='static'
                    sx={{bgcolor: theme.palette.common.white}}>
                <Toolbar>
                    <Stack direction='row' alignItems='center' justifyContent='flex-end' style={{width: '100%'}}>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {'App Title'}
                        </Typography>
                            <Stack marginRight={'19px'}>
                                <Basket />
                            </Stack>
                        <Typography variant='body2' marginRight='19px'>
                            {'userName'}
                        </Typography>
                    </Stack>
                    <React.Fragment>
                        <Box
                            sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}
                        >
                            <Tooltip title='Hesap Ayarları'>
                                <IconButton
                                    onClick={handleClick}
                                    size='small'
                                    sx={{ml: 2}}
                                    aria-controls={open
                                        ? 'account-menu'
                                        : undefined}
                                    aria-haspopup='true'
                                    aria-expanded={open
                                        ? 'true'
                                        : undefined}
                                >
                                    <Avatar
                                        sx={{
                                            width: '36px', height: '36px', backgroundColor: theme.palette.common.black
                                        }}
                                    >
                                        F
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </React.Fragment>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}