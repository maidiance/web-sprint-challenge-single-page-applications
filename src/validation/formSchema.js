import * as yup from 'yup';

const formSchema = yup.object().shape({
    nameInput: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'name must be at least 2 characters'),
    sizeDropdown: yup
        .string()
        .trim()
        .oneOf(['medium', 'large', 'jumbo'], 'Please select a pizza size'),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    specialText: yup
        .string()
        .trim(),
})

export default formSchema;