import React, {JSX, useState} from "react";
import {
    Grid,
    Stack,
    Typography,
    Toolbar,
    useTheme,
    IconButton,
    Tooltip,
    Box,
    Avatar,
    Menu,
    MenuItem
} from "@mui/material";
import {styled} from "@mui/material/styles";
import MuiAppBar from '@mui/material/AppBar'
import Basket from "../../../ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    const handleClose = (): void => {
        setAnchorEl(null)
    }
    const [showProfile, setShowProfile] = useState(false)
    const changeShowProfileStatus = (newStatus: boolean): void => {
        setShowProfile(newStatus)
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
                                        SM
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id='account-menu'
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    paddingTop: '15px',
                                    paddingBottom: '15px',
                                    width: '280px',
                                    boxShadow: '0px 0px 6px #00000029',
                                    overflow: 'visible',
                                    mt: 3.5,
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 10,
                                        width: 25,
                                        height: 25,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0
                                    }
                                }
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={() => setShowProfile(true)}>
                                <Stack paddingLeft='9px' direction='row' spacing='13px'>
                                    <AccountCircleIcon fontSize="medium" color="primary"/>
                                    <Typography variant='body2'>Profil</Typography>
                                </Stack>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}