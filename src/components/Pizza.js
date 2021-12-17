import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 70%
    display: flex;
    margin: 0 auto;
    padding: 1% 3%;
    background-color: ${props => props.theme.pizzaDough};
    color: ${props => props.theme.olive};
    .pizzaDetails{
        background-color:${props => props.theme.darkGreen};
        color: ${props => props.theme.black};
        padding: 0 2%;
    }
`

function Pizza({ details, remove }) {
    if (!details) {
        return <h3>Working fetching your pizza orders...</h3>
    }

    return (
        <StyledDiv className='pizza container'>
            <h2>{details.nameInput}</h2>
            <div className='pizzaDetails'>
                <p>Pizza size: {details.sizeDropdown}</p>
                {
                    !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
                        </ul>
                    </div>
                }
                <p>Special Instructions: {details.specialText}</p>
            </div>
        </StyledDiv>
    )
}

export default Pizza;