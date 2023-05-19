import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import NextLink from 'next/link';
import {Avatar, Box, Button, IconButton} from '@mui/material';
import Sidebar from './SideBar';

export interface IHeaderProps {
    selectedCur: any;
    // eslint-disable-next-line no-unused-vars
    setSelectedCur: (value: any) => void;
}
export default function MobileHeader(props: IHeaderProps) {
    const {selectedCur, setSelectedCur} = props;
    const [opened, setOpened] = React.useState(false);
    return (
        <AppBar position="fixed" sx={{backgroundColor: '#142241'}}>
            <Toolbar
                sx={{
                    minHeight: '80px!important',
                    // justifyContent: 'space-between',
                }}>
                <Sidebar
                    selectedCur={selectedCur}
                    setSelectedCur={setSelectedCur}
                    onClose={() => setOpened(false)}
                    open={opened}
                />
                <Box
                    sx={{
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                    <IconButton
                        color="inherit"
                        aria-label=" picture"
                        component="label"
                        onClick={() => {
                            setOpened(true);
                        }}>
                        <MenuIcon sx={{width: '32px', height: '32px'}} />
                    </IconButton>

                    <Avatar
                        src="/icons/logo.svg"
                        alt="logo"
                        href="/"
                        component={NextLink}
                        variant="rounded"
                        sx={{
                            ml: '70px',
                            mr: '40px',
                            width: 'unset',
                        }}></Avatar>
                    <Button
                        sx={{
                            borderRadius: '4px',
                            color: '#142241',
                            backgroundColor: '#E9B109',
                            '&:hover': {
                                backgroundColor: '#F1CC60',
                            },
                        }}
                        variant="contained">
                        Log In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
