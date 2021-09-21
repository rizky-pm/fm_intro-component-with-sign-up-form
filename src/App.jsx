import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';

const AppContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 95px 25px;
`;

function App() {
    return (
        <AppContainer>
            <Header />
        </AppContainer>
    );
}

export default App;
