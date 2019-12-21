import React from "react"
import styled from "styled-components"
import StarRatings from 'react-star-ratings';
import { formatPhoneNumber, formatEmail, formatDriverTypeUrl } from "../utils/helpers"

const transitionTime = 0.5;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: ${({ratio}) => 225 * ratio}px;
    max-height: ${({ratio}) => 225 * ratio}px;
    width: ${({ratio}) => 150 * ratio}px;
    padding: 16px;
    background-color: white;
    border-radius: 5px;
    :hover {
        cursor: url(${require('../../assets/svg/cursor_black.svg')}), auto;
    }
` 

const Profile = styled.div`
    position:relative;
    height: ${({ratio}) => 155 * ratio}px;
    width: 100%;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size:cover;
    transition: height ${transitionTime}s ease-in-out;
    ${Wrapper}:hover & {
        height: ${({ratio}) => 120 * ratio}px;
    }
`

const DriverType = styled.img`
    position: absolute;
    transform: translate(-50%,-50%);
    bottom: ${({ratio}) => -25 / ratio}%;
    left: ${({ratio}) => 20 / ratio}%;
    transition: bottom ${transitionTime}s ease-in-out;
    ${Wrapper}:hover & {
        bottom: ${({ratio}) => -30 / ratio}%;
    }
`

const Description = styled.div`
    padding-top: ${({ratio}) => 30 * ratio}px;
    display: flex;
    flex-direction: column;
`

const HoverDisplay = styled.div`
    display: flex;
    height: 0;
    visibility: hidden;
    opacity: 0;
    color: darkgrey;
    font-size: ${({ratio}) => 11 * ratio}px;
    transition: opacity ${transitionTime}s ease-in-out, 
                visibility ${transitionTime}s ease-in-out, 
                height ${transitionTime}s ease-in-out;
    ${Wrapper}:hover &{
        visibility: visible;
        height: ${({ratio}) => 17.5 * ratio}px;
        opacity: 1;
    }
`

const RankWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: ${({ratio}) => 2 * ratio}px;
`

const RankDescr = styled.div`
    font-size: ${({ratio}) => 8 * ratio}px;
    font-weight: bold;
    padding-left: ${({ratio}) => 2 * ratio}px;
`

const FullName = styled.div`
    color: darkgray;
    font-size: ${({ratio}) => 17 * ratio}px;
    font-weight: bold;
    padding-bottom: ${({ratio}) => 5 * ratio}px;
`

const Subtitle = styled.div`
    padding-right: ${({ratio}) => 2 * ratio}px;
`

const TextOverflow = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const DriverPicture = ({profile_image, driverType, ratio}) => {
    const driverTypeUrl = formatDriverTypeUrl(driverType);
    const anonymousImage = "https://www.stratelio.net/img/front_v2/03_experts/02_nos_experts/user-icon.png";
    return(
        <Profile imageUrl={profile_image || anonymousImage} ratio={ratio}>
            <DriverType src={driverTypeUrl} ratio={ratio}/>
        </Profile>
    )
}

const DriverRank = ({rankNum, ratio}) => {
    return (
        <RankWrapper ratio={ratio}>
            <StarRatings
                rating={Number(rankNum)}
                starRatedColor="#23b4eb"
                numberOfStars={5}
                starDimension={`${13*ratio}px`}
                starSpacing={`${1*ratio}px`}
            />
            <RankDescr ratio={ratio}>{`(${rankNum})`}</RankDescr>
        </RankWrapper>
    )
} 

const PhoneNumber = ({phoneNum, ratio}) => {
    const formattedPhoneNum = formatPhoneNumber(phoneNum);
    return (
        <HoverDisplay ratio={ratio}>
            <Subtitle ratio={ratio}>Phone Number:</Subtitle>
            <TextOverflow>{formattedPhoneNum}</TextOverflow>
        </HoverDisplay>
    )
} 


const Email = ({email, ratio}) => {
    const formattedEmail = formatEmail(email);
    return (
        <HoverDisplay ratio={ratio}>
            <Subtitle ratio={ratio}>Email:</Subtitle>
            <TextOverflow>{formattedEmail}</TextOverflow>
        </HoverDisplay>
    )
}

export const DriverCard = ({driver: {profile_image, driverType, name, driverRank, phone, email}, ratio } ) => {
    return (
        <Wrapper ratio={ratio}>
            <DriverPicture profile_image={profile_image} driverType={driverType} ratio={ratio}/>
            <Description ratio={ratio}>
                <FullName ratio={ratio}>{name}</FullName>
                <DriverRank rankNum={Number(driverRank)} ratio={ratio} />
                <PhoneNumber phoneNum={phone} ratio={ratio}/>
                <Email email={email} ratio={ratio}/>
            </Description>
        </Wrapper>
    )
}
