import * as React from 'react';
import {Avatar, Box, Menu, MenuItem, Typography, Button} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import {currencies} from 'src/constants';

export interface ISelectProps {
    selectedCur: any;
    // eslint-disable-next-line no-unused-vars
    setSelectedCur: (value: any) => void;
}

export default function Select(props: ISelectProps) {
    const {selectedCur, setSelectedCur} = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
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
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    disablePadding: true,
                }}>
                {Object.keys(currencies).map((item: any) => {
                    return (
                        <MenuItem
                            key={item}
                            sx={{
                                width: '105px',
                                display: 'flex',

                                backgroundColor:
                                    selectedCur.label == currencies[item].label
                                        ? '#2C3E67'
                                        : '#142241',
                                borderRight:
                                    selectedCur.label == currencies[item].label
                                        ? ' 2px solid #E9B109'
                                        : 'unset',
                                color:
                                    selectedCur.label == currencies[item].label
                                        ? '#E9B109'
                                        : '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#2C3E67',
                                    borderRight: ' 2px solid #E9B109',

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
                                    fontSize: '14px',
                                }}>{`${currencies[item].label}`}</Typography>
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    );
}
