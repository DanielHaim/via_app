import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu:400&display=swap');

    body {
        margin: 0;
        font-family: 'Ubuntu';
        font-size: 12px;
        color: black;
        background-color: #f1f1f1;
    }

    h1 {
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`