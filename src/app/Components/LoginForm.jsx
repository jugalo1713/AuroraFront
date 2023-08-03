import { TextField } from '@mui/material'
import React from 'react'

export const LoginForm = () => {
    return (
        <div className='login-form u-center'>
            <form className='login-form__form'>
                <TextField
                    required
                    id="outlined-required"
                    label="User"
                />
            </form>
        </div>
    )
}
