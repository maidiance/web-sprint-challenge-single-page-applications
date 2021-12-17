import React from 'react';

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
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Order a Pizza</h2>

            <div className='errors'>
                {/* errors here */}
                <div>{errors.nameInput}</div>
                <div>{errors.pizzaSize}</div>
            </div>

            <div className='form-group inputs'>
                <label>Name
                    <input
                        id='name-input'
                        value={values.nameInput}
                        onChange={onChange}
                        name='nameInput'
                        type='text'
                    />
                </label>
                <label>Pizza Size
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
                <label>Special Instructions
                    <input
                        id='special-text'
                        value={values.specialText}
                        onChange={onChange}
                        name='specialText'
                        type='text'
                    />
                </label>

                <button type='submit' id='order-button' disabled={disabled}>Add to Order</button>
            </div>
        </form>
    )
}