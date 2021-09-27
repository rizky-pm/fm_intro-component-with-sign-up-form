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

const PlanOfferContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.colors.accent};
    animation: ${AnimationIn} 2s ease;
    width: 100%;
    height: 5.3125rem;
    margin-top: 4.375rem;
    padding: 0 4.375rem;
    border-radius: 0.625rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.1875rem 0.375rem,
        rgba(0, 0, 0, 0.23) 0rem 0.1875rem 0.375rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: plan;
        width: 33.75rem;
        height: 3.75rem;
        margin-top: 3.125rem;
    }
`;

const PlanOfferText = styled.p`
    text-align: center;
`;

const BoldedText = styled.span`
    font-weight: ${(props) => props.theme.fontweights.bold};
`;

const PlanOffer = () => {
    return (
        <PlanOfferContainer>
            <PlanOfferText>
                <BoldedText>Try it free 7 days</BoldedText> then $20/mo.
                thereafter
            </PlanOfferText>
        </PlanOfferContainer>
    );
};

export default PlanOffer;
