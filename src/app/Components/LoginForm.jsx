import { TextField } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
export const LoginForm = () => {

const onLogin = ()=>{
    
}

    return (
        <div className='login-form u-center'>
            <form className='login-form__form'>
                <TextField
                    required
                    id="user"
                    label="User"
                    className='login-form__input'
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    className='login-form__input'
                />
                 <Button variant="contained">Sign In</Button>
            </form>
        </div>
    )
}
