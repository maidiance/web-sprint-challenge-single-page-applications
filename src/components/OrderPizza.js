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
        const { name, value } = evt.target;
        change(name, value);
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Order a Pizza</h2>

            <div className='errors'>
                {/* errors here */}
            </div>

            <div className='form-group inputs'>
                <label>Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name-input'
                        type='text'
                    />
                </label>
                <label>Pizza Size
                    <select
                        value={values.pizzaSize}
                        onChange={onChange}
                        name='size-dropdown'
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
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>Mushroom
                    <input
                        type='checkbox'
                        name='mushroom'
                        onChange={onChange}
                        checked={values.mushroom}
                    />
                </label>
                <label>Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.sausage}
                    />
                </label>
                <label>Onion
                    <input
                        type='checkbox'
                        name='onion'
                        onChange={onChange}
                        checked={values.onion}
                    />
                </label>
            </div>
        </form>
    )
}