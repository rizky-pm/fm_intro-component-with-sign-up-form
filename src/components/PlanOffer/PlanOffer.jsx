import React from 'react';
import styled from 'styled-components';

const PlanOfferContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.colors.accent};
    width: 100%;
    height: 85px;
    margin-top: 70px;
    padding: 0 70px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
