import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: 'hsl(0, 100%, 74%)',
        secondary: 'hsl(154, 59%, 51%)',
        accent: 'hsl(248, 32%, 49%)',
        darkBlue: 'hsl(249, 10%, 26%)',
        grayishBlue: 'hsl(246, 25%, 77%)',
    },
    fontweights: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
    breakpoints: {
        portraitSmartphone: 'min-width: 480px',
        portraitTablets: 'min-width: 600px',
        landscapeTablets: 'min-width: 801px',
        laptops: 'min-width: 1025px',
        desktops: 'min-width: 1281px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
