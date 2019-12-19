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
        @media (min-width: 0px){
            width: ${widthCard}px;
        }
        @media (min-width: ${widthCard + marginGrid}px){
            width: ${widthCard}px;
        }
        @media (min-width: ${widthCard * 2 + marginGrid}px){
            width: ${widthCard * 2}px;
        }
        @media (min-width: ${widthCard * 3 + 2 * marginGrid}px){
            width: ${widthCard * 3}px;
        }
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
    const singleCard = useRef();
    const width = useWindowWidth();
    const driversByName = useSelector(driversByNameSelector);
    const [ratio, setRatio]  = useState(1);
    const [widthCard, setWidthCard] = useState();

    // first rendering
    useEffect(() => { 
        singleCard.current = (getWidthCard(1) * 2) + 2 * marginGrid; 
    }, []);

    // update ratio card
    useEffect(() => {
        if(width < singleCard.current && ratio === 1){ setRatio(1.5); }
        else if(width >= singleCard.current && ratio !== 1){ setRatio(1); }
    }, [width]);

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