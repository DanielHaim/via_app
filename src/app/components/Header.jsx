import React from "react"
import styled from "styled-components"
import { SearchFilter } from "./SearchFilter"

const transitionTime = 0.5;

const TextPart = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    text-overflow: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    padding-right: 20px;
    font-size: 1.6rem;
    transition: width   ${transitionTime}s ease-in-out, 
                opacity ${transitionTime}s ease-in-out, 
                padding ${transitionTime}s ease-in-out;
    ${({theme: {breakpoints}}) =>`
        @media ${breakpoints.xs} { padding-left: 40px;}
        @media ${breakpoints.tabletS} {  padding-left: 85px;}
    `}
` 

const SearchPart = styled.div`
    display: flex;
    align-items: center;
    padding: 0 35px;
    max-width: 400px;
    width: 100%;
    justify-content: flex-end;
`

const HeaderBar = styled.div`
    display: flex;
    min-width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #23b4eb;
    height: ${({height}) => height}px;
    justify-content: space-between;
    &:focus-within {
        ${({theme: {breakpoints}}) =>`
            @media ${breakpoints.xs} { 
                justify-content: center;
                ${TextPart}   { 
                    width: 0;
                    opacity: 0;
                    padding-left: 0;
                    padding-right: 0;
                }
            }
            @media ${breakpoints.tabletS} {  
                justify-content: space-between; 
                ${TextPart}   { 
                    width: initial;
                    opacity: 1;
                    padding-left: 85px;
                    padding-right: 20px;
                }
            }
        `}
    }
`

export const Header = ({height}) => {
    return (
        <HeaderBar height={height}>
            <TextPart>
                Contact List
            </TextPart>
            <SearchPart>
                <SearchFilter />
            </SearchPart>
        </HeaderBar>
    );
}