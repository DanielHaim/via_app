import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { driversByName as driversByNameSelector } from "../store/selectors"
import { DriverCard } from "../components"
import { useWindowWidth } from "../hooks"

const gutter = 10;
const driverCardWith = 150;
const paddingCard = 16;
const marginGrid = 60;

const getWidthCard = (ratio) => (driverCardWith * ratio) + (2 * paddingCard) + gutter; 

const ContainerGrid = styled.div`
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -${gutter}px;
    margin-bottom: -${gutter}px;
    ${({widthCard}) => `
        // when the screen is smaller than the width of 1 card
        @media (min-width: 0px){
            width: ${widthCard}px;
        }
        // when the screen is greater than the width of 1 card
        @media (min-width: ${widthCard + marginGrid}px){
            width: ${widthCard}px;
        }
        // when the screen is greater than the width of 2 cards
        @media (min-width: ${widthCard * 2 + marginGrid}px){
            width: ${widthCard * 2}px;
        }
        // when the screen is greater than the width of 3 cards
        @media (min-width: ${widthCard * 3 + 2 * marginGrid}px){
            width: ${widthCard * 3}px;
        }
        // when the screen is greater than the width of 4 cards
        @media (min-width: ${widthCard * 4 + 2 * marginGrid}px){
            width: ${widthCard * 4}px;
        }
    `}
`

const Cell = styled.div`
    flex: 0 0 auto;
    margin-bottom: ${gutter}px;
    margin-left: ${gutter}px;
`

export const DriversGrid = () => {
    const ratioBreakPoint = useRef();
    const screenWidth = useWindowWidth();
    const driversByName = useSelector(driversByNameSelector);
    const [ratio, setRatio]  = useState(1);
    const [widthCard, setWidthCard] = useState();

    // first rendering
    useEffect(() => { 
        // change the ratio of the card if the screen is smaller than the width of 2 cards + the margins (right/left)
        ratioBreakPoint.current = {
            'width2Cards': (getWidthCard(1) * 2) + 2 * marginGrid,
            'width3Cards':  (getWidthCard(1) * 3) + 2 * marginGrid
        } 
    }, []);

    // update ratio card
    useEffect(() => {
        if(screenWidth < ratioBreakPoint.current.width3Cards){ setRatio(1.2); }
        if(screenWidth < ratioBreakPoint.current.width2Cards){ setRatio(1.5); }
        else if(screenWidth >= ratioBreakPoint.current.width3Cards){ setRatio(1); }
    }, [screenWidth]);

    //update widthCard 
    useEffect(() => {
        setWidthCard(getWidthCard(ratio));
    }, [ratio]);

    return (
        <ContainerGrid widthCard={widthCard}>
            {
                driversByName.map((driver, index) => 
                    <Cell key={`driver-${index}`}>
                        <DriverCard driver={driver} ratio={ratio}/>
                    </Cell>
                )
            }
        </ContainerGrid>
    )
}