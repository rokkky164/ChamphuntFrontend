import React from "react";
import Styled from "@emotion/styled";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from '@mui/material';

import LogoWithTitle from '../logo.component';

import ResetPasswordForm from './resetpwd-form.component';

import SignInSignUpPageHOC from '../signin-signup-page-hoc'

const RegisterHere = Styled.div(`
    width: 80%;
    max-width: 300px;
    margin: 20px auto 5px auto;
    padding: 10px 20px;
    border-radius: 20px;
    background: black;
    font-size: 15px;
    color: #FFFFFF;
    text-align: center;
`);


const HeaderLabel = Styled.h1(({ align }) => `
    font-size: 40px;
    color: #FFFFFF;
    margin: 0;
    text-align:${align || 'left'}
`);

const InfoLabel = Styled.p(({ align }) => `
    font-size: 15px;
    color: #FFFFFF;
    margin: 0;
    margin-bottom: 15px;
    text-align:${align || 'left'}
`);


export default function ResetPassword() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <SignInSignUpPageHOC matches={matches}>
            <>
                <LogoWithTitle />
                <HeaderLabel align={matches ? 'center' : 'left'}>Reset Password</HeaderLabel>
                <ResetPasswordForm breakPoint={matches} />
            </>
        </SignInSignUpPageHOC>
    );
}