import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    margin: 2% 2%;
    padding: 1% 3%;
    background-color: ${props => props.theme.pizzaDough};
    color: ${props => props.theme.olive};
    border-style: dashed;
    border-color: ${props => props.theme.lighterBeige};
    outline: 5px solid ${props => props.theme.lightBeige};
    h2 {
        width: 70%;
    }
    .pizzaDetails{
        width: 50%;
        background-color:${props => props.theme.beige};
        color: ${props => props.theme.black};
        padding: 1% 5%;
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