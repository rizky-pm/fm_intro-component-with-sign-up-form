import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimationIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const FooterContainer = styled.footer`
    animation: ${AnimationIn} 2s ease;
    margin-top: 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        position: absolute;
        bottom: 1.25rem;
        left: 5.9375rem;
        margin-top: 0;
    }
`;

const Attribution = styled.p`
    text-align: center;
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;

    :hover {
        color: ${(props) => props.theme.colors.accent};
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                .
            </Attribution>
        </FooterContainer>
    );
};

export default Footer;
