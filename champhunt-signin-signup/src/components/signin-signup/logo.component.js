import React from "react";
import Styled from "@emotion/styled";
import LogoImage from '../../assets/images/home/logo/logo@2x.png';

const LogoWrap = Styled.div(`
    display: flex;
    flex-direction: column;
    align-items: center;
`);
const Logo = Styled.img(({ fontSize }) => `
    width: ${fontSize || 64}px;
    height: ${fontSize || 64}px;
    margin: 0;
`)
const Title = Styled.p(`
    color: white;
    font-weight: bold;
    margin: 0;
`)

export default function LogoWithTitle({ fontSize }) {
    return (
        <LogoWrap>
            <Logo src={LogoImage} alt="LogoImage" fontSize={fontSize} />
            <Title>CHAMPHUNT</Title>
        </LogoWrap>
    )
}