import React from 'react';
import styled from 'styled-components';

import BgIntroMobile from './images/bg-intro-mobile.png';

import Header from './components/Header/Header';
import PlanOffer from './components/PlanOffer/PlanOffer';
import Form from './components/Form/Form';

const AppContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 95px 25px;
`;

const BackgroundPattern = styled.img`
    height: 100vh;
    /* top: 50%; */
    /* left: 0; */
    /* transform: translateY(-50%); */
`;

function App() {
    return (
        <>
            <AppContainer>
                <Header />
                <PlanOffer />
                <Form />
                <BackgroundPattern src={BgIntroMobile} />
            </AppContainer>
        </>
    );
}

export default App;
