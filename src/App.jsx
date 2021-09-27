import React from 'react';
import styled from 'styled-components';

import BgIntroMobile from './images/bg-intro-mobile.png';
import BgIntroDesktop from './images/bg-intro-desktop.png';

import Header from './components/Header/Header';
import PlanOffer from './components/PlanOffer/PlanOffer';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

const AppContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 5.9375rem 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: grid;
        place-items: center;
        grid-template-areas:
            'header plan'
            'header form';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.2fr 1fr;
        margin: 0;
        height: 100vh;
    }
`;

const BackgroundPattern = styled.div`
    background-image: url(${BgIntroMobile});
    background-size: cover;
    position: absolute;
    height: 120%;
    width: 120%;
    z-index: -1;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        background-image: url(${BgIntroDesktop});
        height: 100vh;
        width: 100%;
    }
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <PlanOffer />
            <Form />
            <BackgroundPattern />
            <Footer />
        </AppContainer>
    );
}

export default App;
