import * as React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import NextLink from 'next/link';
import {menuItems} from 'src/constants';

export default function Menu() {
    return (
        <Box>
            <Stack direction="row" spacing={4}>
                {menuItems.map((item: string) => {
                    return (
                        <Typography
                            sx={{
                                '&:hover': {
                                    color: '#E9B109',
                                },
                                fontSize: '14px',
                            }}
                            component={NextLink}
                            href="/"
                            key={item}>
                            {item}
                        </Typography>
                    );
                })}
            </Stack>
        </Box>
    );
}
