import {React, useState} from "react";
import { makeStyles, styled } from '@mui/styles';
import Styled from "@emotion/styled";
import { InputAdornment, Button, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { CTextField } from '../../../commons/components/mui-c-components'
import { CIcon } from "../../../commons/components/Icon";
import LockIcon from '../../../assets/images/signin-signup/password.svg';
import GoogleIcon from '../../../assets/images/signin-signup/google.svg';
import MailIcon from '../../../assets/images/signin-signup/mail-icon.svg';
import MobileIcon from '../../../assets/images/signin-signup/mobile-icon.svg';
import VisibilityIcon from '../../../assets/images/signin-signup/visibility-on-icon.svg';
import VisibilityOffIcon from '../../../assets/images/signin-signup/visibility-off-icon.svg';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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


export default function SignUpForm(props) {
    // initialize form error messages
    const [emailErrorMsg, setemailErrorMsg] = useState('');
    const [mobileErrorMsg, setmobileErrorMsg] = useState('');
    const [passwordErrorMsg, setpasswordErrorMsg] = useState('');
    const [confirmpasswordErrorMsg, setconfirmpasswordErrorMsg] = useState('');
    const classes = useStyles();
    const navigate = useNavigate();
    const signUpSubmit = (event) => {

        event.preventDefault();

        var registerOptions = {
             method: 'post',
             url: global.config.ROOTURL.prod + '/api/v0/register/',
             data: JSON.stringify(
                {'email': event.target.email.value,
                 'mobile': null,
                 'password': event.target.password.value,
                 'password2': event.target.password2.value
                }
             ),
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
             },
             json: true
        };
        axios(registerOptions)
        .then(response => {
            navigate('/login',  { state: {activationMsg: 'An email has been sent to your given mail address\n'+
                'Please check your mailbox to activate your account.\n'}})
        })
        .catch(error => {
            if ('email' in error.response.data){
                setemailErrorMsg(error.response.data['email'].join(', '))
            }
            if ('mobile' in error.response.data){
                setmobileErrorMsg(error.response.data['mobile'].join(', '))
            }
            if ('password' in error.response.data){
                setpasswordErrorMsg(error.response.data['password'].join(', '))
            }
            if ('password2' in error.response.data){
                setconfirmpasswordErrorMsg(error.response.data['password2'].join(', '))
            }
        })
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const values = { showPassword: false }

    const handleClickShowPassword = () => {
        setPasswordShown(!passwordShown);
    }
    
    return (
        <>
            <Box component="form" onSubmit={signUpSubmit} noValidate>
                <CTextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoFocus
                    className={classes.root}
                    InputProps={{
                        className: classes.inputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <CIcon src={MailIcon} fontSize={24} />
                            </InputAdornment>
                        ),
                    }}
                />
                {emailErrorMsg && (
                  <p style={{ color: 'red' }}> {emailErrorMsg} </p>
                )}
                <CTextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type={passwordShown? 'text' : 'password'}
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
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    <CIcon src={passwordShown ? VisibilityOffIcon : VisibilityIcon} fontSize={24} onClick={handleClickShowPassword}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {passwordErrorMsg && (
                  <p style={{ color: 'red' }}> {passwordErrorMsg} </p>
                )}
                <CTextField
                    margin="normal"
                    required
                    fullWidth
                    name="password2"
                    placeholder="Confirm password"
                    type={passwordShown? 'text' : 'password'}
                    id="password2"
                    autoComplete="current-password"
                    className={classes.root}
                    InputProps={{
                        className: classes.inputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <CIcon src={LockIcon} fontSize={24} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    <CIcon src={passwordShown ? VisibilityOffIcon : VisibilityIcon} fontSize={24} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {confirmpasswordErrorMsg && (
                  <p style={{ color: 'red' }}> {confirmpasswordErrorMsg} </p>
                )}
                <SubmitButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textTransform: 'none', fontSize: 18 }}
                >
                    Register
                </SubmitButton>
            </Box>
        </>
    )
}