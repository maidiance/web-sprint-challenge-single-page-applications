import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    margin-left: 2%;
    margin-top: 2%;
    padding: 1% 3%;
    background-color: ${props=> props.theme.beige};
    border-style: double;
    border-color: ${props => props.theme.darkerBeige};
    outline: 5px solid ${props => props.theme.lightBeige};
    .name{
        width: 90%;
        margin: 1% 0%;
    }
    .name p {
        display: inline;
        margin-right: 1%;
    }
    .size{
        width: 90%;
        margin: 1% 0%;
    }
    .size p {
        display: inline;
        margin-right: 1%;
    }
    .toppings{
        padding-bottom: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 90%;
    }
    .toppings h2{
        width: 90%;
        margin: 1% 0%;
        padding: 1%;
    }
    #order-button{
        width: 50%;
        padding: 2%;
        margin: 1% 0;
    }

`

export default function OrderPizza(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <StyledForm>
            <form id='pizza-form' onSubmit={onSubmit}>
                <h2>Order a Pizza</h2>

                <div className='errors'>
                    {/* errors here */}
                    <div>{errors.nameInput}</div>
                    <div>{errors.sizeDropdown}</div>
                </div>

                <div className='form-group inputs'>
                    <div className='name'>
                        <label><p>Name</p>
                            <input
                                id='name-input'
                                value={values.nameInput}
                                onChange={onChange}
                                name='nameInput'
                                type='text'
                            />
                        </label>
                    </div>
                    <div className='size'>
                        <label><p>Pizza Size</p>
                            <select
                                id='size-dropdown'
                                value={values.sizeDropdown}
                                onChange={onChange}
                                name='sizeDropdown'
                            >
                                <option value=''>- Select an option -</option>
                                <option value='medium'>Medium (12 inches)</option>
                                <option value='large'>Large (16 inches)</option>
                                <option value='jumbo'>Jumbo (20 inches)</option>
                            </select>
                        </label>
                    </div>
                    <div className='toppings'>
                        <h2>Toppings</h2>
                        <label>Pepperoni
                            <input
                                id='pepperoni'
                                type='checkbox'
                                name='pepperoni'
                                onChange={onChange}
                                checked={values.pepperoni}
                            />
                        </label>
                        <label>Mushroom
                            <input
                                id='mushroom'
                                type='checkbox'
                                name='mushroom'
                                onChange={onChange}
                                checked={values.mushroom}
                            />
                        </label>
                        <label>Sausage
                            <input
                                id='sausage'
                                type='checkbox'
                                name='sausage'
                                onChange={onChange}
                                checked={values.sausage}
                            />
                        </label>
                        <label>Onion
                            <input
                                id='onion'
                                type='checkbox'
                                name='onion'
                                onChange={onChange}
                                checked={values.onion}
                            />
                        </label>
                    </div>
                    <div className='instructions'>
                        <label><p>Special Instructions</p>
                            <input
                                id='special-text'
                                value={values.specialText}
                                onChange={onChange}
                                name='specialText'
                                type='text'
                            />
                        </label>
                    </div>

                    <button type='submit' id='order-button' disabled={disabled}>Add to Order</button>
                </div>
            </form>
        </StyledForm>
    )
}