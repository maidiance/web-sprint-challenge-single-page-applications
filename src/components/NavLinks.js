import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavLinks = styled.div`
    .nav-links {
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        padding: 1%;
        background-color: ${props => props.theme.cheese};
    }
`
const StyledLink = styled(Link)`
    color: ${props => props.theme.black};
    text-decoration: none;
    &:hover {
        color: ${props => props.theme.white};
    }
`


export default function NavLinks(props){
    return(
        <StyledNavLinks>
            <nav>
                <div className='nav-links'>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/pizza'>Order Pizza</StyledLink>
                </div>
            </nav>
        </StyledNavLinks>
    )
}