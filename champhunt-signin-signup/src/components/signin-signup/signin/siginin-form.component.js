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

import axios from "axios";
import { useNavigate } from 'react-router-dom';
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
    // call login api
    const navigate = useNavigate();
    const loginSubmit = (event) => {

        event.preventDefault();
        
        const data = {
            'username': event.target.userid.value, 
             'password': event.target.password.value
        };
        if (validator.isEmail(data['username'])) {
            data['email'] = data['username'];
            delete data['username'];
        }
        var loginOptions = {
             method: 'post',
             url: 'http://127.0.0.1:8001/api/v0/login/',
             data: JSON.stringify(data),
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
             },
             json: true
        };
        axios(loginOptions)
        .then(response => {
            navigate('/onboaring-page')
        })
        .catch(error => {
            if (error.response.status == 401){
                setauthenticatedFailedMsg(error.response.data['detail']);
            }
        })
    }
    // api call end
    return (
        <>
            <Box component="form" onSubmit={loginSubmit} noValidate>
                <CTextField
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
                    {breakPoint ? <FgPass href="/forget-password">Forgot password ?</FgPass> : null}
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
                    <FgPass href="/forget-password" align={'center'}>Forgot password ?</FgPass>
                </FgPassContainer>) : null}
                <LogInWith>
                    <InfoLabel>Or login with</InfoLabel>
                    <CIcon src={GoogleIcon} fontSize={53} />
                </LogInWith>
            </Box>
        </>
    )
}