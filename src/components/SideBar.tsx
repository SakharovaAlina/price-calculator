//    @ts-nocheck
import React from 'react';
import {
    Avatar,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Stack,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {currencies, menuItems} from 'src/constants';

import NextLink from 'next/link';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export interface ISideBarProps {
    onClose: () => void;
    open: boolean;
    selectedCur: any;
    // eslint-disable-next-line no-unused-vars
    setSelectedCur: (value: any) => void;
}

export default function Sidebar(props: ISideBarProps) {
    const {onClose, open} = props;

    const [openedSelect, setOpenedSelect] = React.useState(false);
    const {selectedCur, setSelectedCur} = props;

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: '#142241',
                    color: '#FFFFFF',
                    width: '100%',
                },
            }}
            sx={{zIndex: 1200}}
            variant="temporary">
            <IconButton
                color="inherit"
                onClick={onClose}
                sx={{justifyContent: 'flex-start'}}>
                <CloseIcon
                    sx={{
                        width: '32px',
                        height: '32px',
                        marginY: '24px',
                        ml: '16px',
                    }}
                />
            </IconButton>

            <Divider
                variant="middle"
                sx={{backgroundColor: '#ffffff', opacity: '0.2'}}
            />

            <List
                sx={{
                    mt: 2,
                    '& + &': {
                        mt: 2,
                    },
                }}>
                {menuItems.map((item: string) => {
                    return (
                        <>
                            <ListItem
                                sx={{
                                    '&:hover': {
                                        color: '#E9B109',
                                    },
                                    fontSize: '16px',
                                    my: '10px',
                                }}
                                component={NextLink}
                                href="/"
                                key={item}>
                                {item}
                            </ListItem>
                            <Divider
                                variant="middle"
                                sx={{
                                    backgroundColor: '#ffffff',
                                    opacity: '0.2',
                                }}
                            />
                        </>
                    );
                })}
                <ListItemButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={() => setOpenedSelect(!openedSelect)}
                    sx={{
                        color: open ? '#E9B109' : '#ffffff',
                        fontSize: '14px',
                        '&:hover': {
                            color: '#E9B109',
                        },
                    }}>
                    <Avatar
                        src={`/icons/${selectedCur.icon}`}
                        alt="logo"
                        variant="rounded"
                        sx={{
                            mr: '5px',
                            width: '16px',
                            height: '16px',
                        }}></Avatar>
                    <Typography
                        sx={{
                            fontSize: '14px',
                        }}>{`${selectedCur.label}`}</Typography>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {Object.keys(currencies).map((item: any) => {
                    return (
                        <>
                            <ListItem
                                key={item}
                                disableGutters
                                // divider={true}
                                sx={{
                                    px: 2,
                                    my: '15px',
                                    // width: '105px',
                                    display: 'flex',

                                    backgroundColor: '#142241',
                                    borderLeft:
                                        selectedCur.label ==
                                        currencies[item].label
                                            ? ' 2px solid #E9B109'
                                            : 'unset',
                                    color:
                                        selectedCur.label ==
                                        currencies[item].label
                                            ? '#E9B109'
                                            : '#ffffff',
                                    '&:hover': {
                                        borderLeft: ' 2px solid #E9B109',

                                        color: '#E9B109',
                                    },
                                }}
                                onClick={() => {
                                    setSelectedCur(currencies[item]);
                                }}>
                                <Avatar
                                    src={`/icons/${currencies[item].icon}`}
                                    alt="logo"
                                    variant="rounded"
                                    sx={{
                                        mr: '5px',
                                        width: '16px',
                                        height: '16px',
                                    }}></Avatar>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                    }}>{`${currencies[item].label}`}</Typography>
                            </ListItem>
                        </>
                    );
                })}
                <Divider
                    variant="middle"
                    sx={{
                        backgroundColor: '#ffffff',
                        opacity: '0.2',
                    }}
                />
            </List>
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    flexGrow: 0,
                    mb: '40px',
                    alignItems: 'center',
                    pt: 2,
                    px: 2,
                }}>
                <Button
                    sx={{
                        color: '#ffffff',
                        fontWeight: '600',
                        '&:hover': {
                            color: '#E9B109',
                        },
                    }}
                    variant="outlined"
                    color="inherit">
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
        </Drawer>
    );
}
