import { useState } from 'react';
import { loginSchema } from '../utils/schemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(loginSchema)
    });
    return (
        <>
            <p>Login</p>
        </>
    )
}

export default Login
