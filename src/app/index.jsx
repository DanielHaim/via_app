import React from "react"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "./theme"
import { Layout, DriversGrid } from "./containers"

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <DriversGrid />
            </Layout>
        </ThemeProvider>
    );
}