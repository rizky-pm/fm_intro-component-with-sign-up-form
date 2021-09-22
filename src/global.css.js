import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        color: white;
        background-color: ${(props) => props.theme.colors.primary};
        /* background-color: white; */
    }
`;

export default GlobalStyles;
