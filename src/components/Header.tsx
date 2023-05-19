import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from './Menu';

import NextLink from 'next/link';
import {Avatar, Box, Button, Stack} from '@mui/material';
import Select from './Select';

export interface IHeaderProps {
    selectedCur: any;
    // eslint-disable-next-line no-unused-vars
    setSelectedCur: (value: any) => void;
}
export default function Header(props: IHeaderProps) {
    const {selectedCur, setSelectedCur} = props;
    return (
        <AppBar position="fixed" sx={{backgroundColor: '#142241'}}>
            <Toolbar
                sx={{
                    minHeight: '80px!important',
                    justifyContent: 'space-between',
                }}>
                <Box
                    sx={{
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
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
                    <Menu />
                </Box>
                <Stack
                    direction="row"
                    spacing={3}
                    sx={{flexGrow: 0, mr: '71.5px', alignItems: 'center'}}>
                    <Select
                        selectedCur={selectedCur}
                        setSelectedCur={setSelectedCur}
                    />
                    <Button
                        sx={{
                            color: '#ffffff',
                            fontWeight: '600',
                            '&:hover': {
                                color: '#E9B109',
                            },
                        }}
                        variant="text">
                        Sign Up
                    </Button>
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
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
