import React, { useState } from "react";

import { makeStyles, styled } from '@mui/styles';
import Styled from "@emotion/styled";
import { InputAdornment, Button, Box } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { CTextField, CFormControlLabel, CCheckbox } from '../../../commons/components/mui-c-components'
import { CIcon } from "../../../commons/components/Icon";
import UserIcon from '../../../assets/images/signin-signup/user.svg'
import LockIcon from '../../../assets/images/signin-signup/password.svg';
import GoogleIcon from '../../../assets/images/signin-signup/google.svg';
import { useCookies } from 'react-cookie';

import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import validator from 'validator';

const pageFontColor = '#FFFFFF'


const LogInWith = Styled.div(`
    display: flex;
    flex-direction: column;
    align-items: center;
`);

const useStyles = makeStyles({
    root: {},
    inputProps: {
        color: pageFontColor,
        borderRadius: 15,
        border: 10,
        fontSize: 18,
    }
});

const FgPassContainer = Styled.div(`
    marging: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 5px;
`);

const FgPass = Styled.a(({ align }) => `
    font-size: 15px;
    color: #FFFFFF;
    margin: 10px;
    cursor: pointer;
    text-decoration: none;
    text-align:${align || 'left'}
`);

const InfoLabel = Styled.p(`
    font-size: 15px;
    color: #FFFFFF;
    margin: 0;
    margin-bottom: 15px;
`);

const SubmitButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 20,
    color: pageFontColor,
    height: 45,
});


export default function SignInForm({ breakPoint }) {
    const classes = useStyles();
    const [authenticatedFailedMsg, setauthenticatedFailedMsg] = useState('');
    // const [userActivationMsg, setUserActivationMsg] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const {state} = useLocation();
    const { activationMsg } = state;
    // call login api
    const navigate = useNavigate();
    var initialValues = {
        'userid': '',
        'password': ''
    }
    if (cookies.hasOwnProperty('username') && cookies.hasOwnProperty('password')){
        initialValues = {
            'userid': cookies['username'],
            'password': cookies['password']
        }
    }
    const loginSubmit = (event) => {

        event.preventDefault();
        const isRemember = event.target.remember.checked;

        const data = {
            'username': event.target.userid.value,
            'password': event.target.password.value
        };
        const handle = () => {
          setCookie('username', data['username'], { path: '/' });
          setCookie('password', data['password'], { path: '/' });
        };
        if (isRemember){
            handle();
        }

        if (validator.isEmail(data['username'])) {
            data['email'] = data['username'];
            delete data['username'];
        }
        var loginOptions = {
            method: 'post',
            url: global.config.ROOTURL.prod + '/api/v0/login/',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            json: true
        };
        axios(loginOptions)
            .then(response => {
                localStorage.setItem('user_id', response.data['user_id']);
                localStorage.setItem('user_email', response.data['user_email']);
                localStorage.setItem('full_name', response.data['full_name']);
                localStorage.setItem('user_mobile', response.data['user_mobile']);
                localStorage.setItem('user_name', response.data['user_name']);
                localStorage.setItem('access-token', response.data['access']);
                localStorage.setItem('refresh-token', response.data['refresh']);

                navigate('/onboarding');
            })
            .catch(error => {
                if (error.response.status == 401) {
                    setauthenticatedFailedMsg(error.response.data['detail']);
                }
            })
    }
    // api call end
    return ( <
        >
        {activationMsg && (
                  <p style={{ color: 'white' }}> {activationMsg}</p>
        )}
        <Box component="form" onSubmit={loginSubmit} noValidate>
                <CTextField
                    defaultValue={initialValues.userid}
                    margin="normal"
                    required
                    fullWidth
                    id="userid"
                    name="userid"
                    placeholder="Username/Email"
                    autoFocus
                    className={classes.root}
                    InputProps={{
                        className: classes.inputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <CIcon src={UserIcon} fontSize={24} />
                            </InputAdornment>
                        ),
                    }}
                />
                <CTextField
                    defaultValue={initialValues.password}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className={classes.root}
                    InputProps={{
                        className: classes.inputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <CIcon src={LockIcon} fontSize={24} />
                            </InputAdornment>
                        ),
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                    <CFormControlLabel
                        control={(
                            <CCheckbox
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleOutlineRoundedIcon />}
                            />)
                        }
                        label="Remember me"
                        name="remember"
                    />
                    {breakPoint ? <FgPass href="/reset-pwd">Forgot password ?</FgPass> : null}
                </div>
                {authenticatedFailedMsg && (
                  <p style={{ color: 'red' }}> {authenticatedFailedMsg} </p>
                )}
                <SubmitButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textTransform: 'none', fontSize: 18 }}
                >
                    Login
                </SubmitButton>
                {!breakPoint ? (<FgPassContainer>
                    <FgPass href="/reset-pwd" align={'center'}>Forgot password ?</FgPass>
                </FgPassContainer>) : null}

            </Box> <
        />
    )
}