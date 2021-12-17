import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header.js';
import NavLinks from './components/NavLinks.js';

export default function Home() {
    const history = useHistory();

    const routeToShop = () => {
        history.push('/pizza');
    }

    return (
        <>
            {
                <Header />
            }
            {
                <NavLinks route={routeToShop}/>
            }
        </>
    )
}