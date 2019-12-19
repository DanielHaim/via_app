import React, {Fragment} from "react"
import styled from "styled-components"
import { Header } from "../components"

const headerHeight = 70;

const Content = styled.div`
    margin-top: ${headerHeight}px;
    display: flex;
    justify-content: center;
`

export const Layout = ({children}) => {
    return (
        <Fragment>
            <Header height={headerHeight}/>
            <Content>
                {children}
            </Content>
        </Fragment>
    )
}