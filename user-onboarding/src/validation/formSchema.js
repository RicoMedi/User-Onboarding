import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('username is required')
    .min(3, 'Username must have at least 3 characters'),

    email: yup
    .string()
    .email('must be a valid email address')
    .required('Email is required'),
    password: yup
    .string()
    .required('Password is Required')
    .min(6, 'Password must be 6 characters long!'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept the terms and conditions to submit')
    
})
export default formSchema;