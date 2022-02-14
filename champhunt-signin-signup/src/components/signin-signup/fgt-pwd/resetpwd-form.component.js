import {React, useState} from "react";
import { makeStyles, styled } from '@mui/styles';
import Styled from "@emotion/styled";
import { InputAdornment, Button, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { CIcon } from "../../../commons/components/Icon";
import UserIcon from '../../../assets/images/signin-signup/user.svg'

import { CTextField } from '../../../commons/components/mui-c-components'
import LockIcon from '../../../assets/images/signin-signup/password.svg';
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

const resetPasswordSubmit = () => {

    
}

export default function ResetPasswordForm(props) {
    // initialize form error messages
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    
    const classes = useStyles();
    const navigate = useNavigate();
    // call register api
    const fgtPwdSubmit = (event) => {

        event.preventDefault();

        var fgtPwdOptions = {
             method: 'post',
             url: global.config.ROOTURL.prod + '/api/v0/reset-password/',
             data: JSON.stringify(
                {
                 'email': event.target.password.value,
                }
             ),
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
             },
             json: true
        };
        axios(fgtPwdOptions)
        .then(response => {
            navigate('/login')
        })
        .catch(error => {
            if ('password' in error.response.data){
                setEmailErrorMsg(error.response.data['password'].join(', '))
            }
        })
    }

    return (
        <>
            <Box component="form" onSubmit={resetPasswordSubmit} noValidate>
                <CTextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="Email"
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
                {emailErrorMsg && (
                  <p style={{ color: 'red' }}> {emailErrorMsg} </p>
                )}
                <SubmitButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textTransform: 'none', fontSize: 18 }}
                >
                    Send password reset link
                </SubmitButton>
            </Box>
        </>
    )
}