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
        <form id='pizza-form' onSumbit={onSubmit}>
            <h2>Order a Pizza</h2>

            <div className='errors'>
                {/* errors here */}
            </div>

            <div className='form-group inputs'>
                <label>
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name-input'
                        type='text'
                    />
                </label>
            </div>
        </form>
    )
}