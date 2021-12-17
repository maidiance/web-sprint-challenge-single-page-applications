import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 70%
    display: flex;
    margin: 0 auto;
    padding: 2%;
    background-color: ${props => props.theme.pizzaDough};
    color: ${props => props.theme.olive};
`

export default function Header(props){
    return (
        <StyledHeader>
            <div className='header'>
                <h1><span role='img' aria-label='pizza'>🍕</span> Lambda Eats</h1>
            </div>
        </StyledHeader>
    )
}