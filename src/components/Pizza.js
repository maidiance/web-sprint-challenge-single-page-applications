import React from 'react';

function Pizza({ details }) {
    if (!details) {
        return <h3>Working fetching your pizza orders...</h3>
    }

    return (
        <div className='pizza container'>
            <h2>{details.nameInput}</h2>
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
            <p>Special Instructions: {details.specialInstructions}</p>
        </div>
    )
}

export default Pizza;