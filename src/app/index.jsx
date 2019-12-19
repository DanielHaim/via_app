import React from "react"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "./theme"
import { Layout } from "./containers/Layout"
import { DriversGrid } from "./containers/DriversGrid"

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