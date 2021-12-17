import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavLinks = styled.div`
    .nav-links {
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding: 1%;
        background-color: ${props => props.theme.cheese}
    }
`


export default function NavLinks(props){
    return(
        <StyledNavLinks>
            <nav>
                <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Order Pizza</Link>
                </div>
            </nav>
        </StyledNavLinks>
    )
}