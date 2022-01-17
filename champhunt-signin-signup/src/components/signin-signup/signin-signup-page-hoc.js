import React from "react";
import Styled from "@emotion/styled";
import BgImage from '../../assets/images/signin-signup/signin-signup-bg-2.png';

const scale = 0.8;

const PageContainer = Styled.div(`
    height: 100vh;
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    background-color: grey;
    background-size: cover;
    background-position: center;
    overflow: auto;
    display: flex;
`);

const desktopViewStyles = {
    margin: 'auto',
    // position: 'relative',
    // transform: "translate(-50%, -50%)",
    // left: "50%",
    // top: "50%",
    backgroundColor: '#00000059',
    border: '1px solid #FFFFFF52',
    padding: '20px 50px',
    borderRadius: 20,
    transform: `scale(${scale})`,
}

const mobileViewStyles = { padding: '10px 20px' }

export default function SignInSignUpPageHOC(props) {
    const {
        desktopViewStyles: extraDesktopViewStyles = {},
        mobileViewStyles: extraMobileViewStyles = {} } = props || {}
    return (
        <PageContainer>
            <div style={{
                maxWidth: 480,
                color: 'white',
                ...props.matches ? {
                    ...desktopViewStyles,
                    ...extraDesktopViewStyles
                } : {
                    ...mobileViewStyles,
                    ...extraMobileViewStyles
                }
            }}>
                {props.children}
            </div>
        </PageContainer>
    )
};