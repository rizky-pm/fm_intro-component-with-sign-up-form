import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    text-align: center;
`;

const TitleText = styled.h1`
    font-size: 28px;
`;

const DescriptionText = styled.p`
    margin-top: 30px;
    font-size: 18px;
    opacity: 0.9;
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
