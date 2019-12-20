import React, {useEffect, useState} from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { driversByName as driversByNameSelector } from "../store/selectors"
import { DriverCard } from "../components"
import { useBreakPoint } from "../hooks"

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
    const breakTo1Card = (getWidthCard(1) * 2) + 2 * marginGrid;
    const breakTo2Card = (getWidthCard(1) * 3) + 2 * marginGrid;
    
    const gotBreakTo1 = useBreakPoint(breakTo1Card);
    const gotBreakTo2 = useBreakPoint(breakTo2Card);
    const driversByName = useSelector(driversByNameSelector);
    const [ratio, setRatio]  = useState(1);
    const [widthCard, setWidthCard] = useState();
    
    // update ratio card for breakpoints
    useEffect(() => {
        if(gotBreakTo1){ ratio !== 1.5 && setRatio(1.5); }
        else if(gotBreakTo2){ ratio !== 1.2 && setRatio(1.2); }
        else{ ratio !== 1 && setRatio(1); }
    }, [gotBreakTo1, gotBreakTo2]);
    
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