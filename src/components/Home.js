import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import NavLinks from './NavLinks';

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