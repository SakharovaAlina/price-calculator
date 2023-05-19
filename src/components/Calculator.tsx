import * as React from 'react';
import {Box, Stack, TextField} from '@mui/material';

export interface ICalculatorProps {
    currency: any;
}

export default function Calculator(props: ICalculatorProps) {
    const {currency} = props;
    const [price, setPrice] = React.useState(0);

    const getPrice = (item: any, amount: any) => {
        return amount * item.value;
    };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
                marginY: 5,
                width: '100%',
                justifyContent: 'center',
            }}
            noValidate
            autoComplete="off">
            <Stack direction="row" spacing={4} sx={{justifyContent: 'center'}}>
                <TextField
                    id="outlined-number"
                    label="Amount"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPrice(getPrice(currency, event.target.value));
                    }}
                    focused
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Price"
                    value={price}
                    InputProps={{
                        readOnly: true,
                    }}
                    focused
                />
            </Stack>
        </Box>
    );
}
