import React from "react";
import Styled from "@emotion/styled";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from '@mui/material';

import LogoWithTitle from '../logo.component';
import SignUpForm from './siginup-form.component';

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


export default function SignUp() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <SignInSignUpPageHOC matches={matches}>
            <>
                <LogoWithTitle />
                <HeaderLabel align={matches ? 'center' : 'left'}>Signup</HeaderLabel>
                <InfoLabel align={matches ? 'center' : 'left'}>Access exciting features and grab interesting deals</InfoLabel>
                <SignUpForm breakPoint={matches} />
                <RegisterHere>
                    <span>
                        Existing user ? <Link href="/login" style={{ textDecoration: 'none' }}>&nbsp;Login here</Link>
                    </span>
                </RegisterHere>
            </>
        </SignInSignUpPageHOC>
    );
}