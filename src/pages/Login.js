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
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <p>{loginError}</p>}
                <fieldset disabled={submitting}>
                    <div>
                        <input name='identifier' placeholder='Username' ref={register} type='text' />
                        {errors.identifier && <p>{errors.identifier.message}</p>}
                    </div>
                    <div>
                        <input name='identifier' placeholder='Username' ref={register} type='password' />
                        {errors.password && <p>{errors.identifier.password}</p>}
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default Login
