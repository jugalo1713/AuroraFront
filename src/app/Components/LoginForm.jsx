"use client"

import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
export const LoginForm = () => {


    // useEffect(() => {
    //     axios.get('https://localhost:7152/weatherforecast')
    //     //axios.get('https://beskar-aurora-be.azurewebsites.net/weatherforecast')
    //     .then(function (response) {
    //       // handle success
    //       console.log(response);
    //     })
    // }, []);

    const handleForm = (e) => {
        e.preventDefault();

        var user = e.target.user.value;
        var password = e.target.password.value;

        //const url = `https://localhost:7152/login?user=${user}&password=${password}`;
        const url = `https://beskar-aurora-be.azurewebsites.net/login?user=${user}&password=${password}`;

        axios.post(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className='login-form u-center'>
            <form className='login-form__form' onSubmit={(e) => { handleForm(e) }}>
                <TextField
                    required
                    id="user"
                    label="User"
                    className='login-form__input'
                    type='email'
                    name='email'
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    className='login-form__input'
                    type='password'
                    name='password'
                />
                <Button type='submit' variant="contained">Sign In</Button>
            </form>
        </div>
    )
}

