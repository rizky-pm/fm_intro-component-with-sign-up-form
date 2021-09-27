import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimationIn = keyframes`
    0% {
        transform: translateY(40px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const HeaderContainer = styled.header`
    text-align: center;
    animation: ${AnimationIn} 2s ease;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: header;
        text-align: left;
        width: 32.8125rem;
        height: 12.5rem;
    }
`;

const TitleText = styled.h1`
    font-size: 1.75rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        font-size: 3rem;
        line-height: 1.1;
    }
`;

const DescriptionText = styled.p`
    margin-top: 1.875rem;
    font-size: 1.125rem;
    opacity: 0.9;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        font-size: 1rem;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <TitleText>Learn to code by watching others</TitleText>
            <DescriptionText>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.{' '}
            </DescriptionText>
        </HeaderContainer>
    );
};

export default Header;
