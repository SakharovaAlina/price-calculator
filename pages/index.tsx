import type {NextPage} from 'next';
import Layout from 'src/components/Layout';
import Calculator from 'src/components/Calculator';
import {currencies} from 'src/constants';
import React from 'react';

const Home: NextPage = () => {
    const [selectedCurrency, setselectedCurrency] = React.useState(
        currencies[0]
    );
    return (
        <Layout
            selectedCur={selectedCurrency}
            setSelectedCur={setselectedCurrency}>
            <Calculator currency={selectedCurrency} />
        </Layout>
    );
};

export default Home;
