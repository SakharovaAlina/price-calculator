import 'styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
    typography: {
        fontSize: 14,
        fontFamily: 'Gilroy-regular',
        fontWeightRegular: '600',
    },
});

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
