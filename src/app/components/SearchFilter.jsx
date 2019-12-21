import React from "react"
import styled from "styled-components"
import { debounce } from "lodash"
import { useActions } from "../hooks/useAction"
import { searchText as searchTextAction } from "../store/actions"

const StyledSearchInput = styled.input`
    border-radius:20px;
    border: 1px solid #DCDCDC;
    outline: none;
    line-height:30px;
    height: 30px;
    margin:0;
    padding:15px;
    font-size:0.8rem;
    background-image: url(http://assets.stickpng.com/thumbs/585e4ae1cb11b227491c3393.png);
    background-repeat: no-repeat;
    background-size: 13px 13px;
    background-position:right 10px center;
    transition: max-width .5s ease-in-out;
    padding-right: 18px;
    width: 100%;
    color: grey;
    &:focus{ border-color: aqua; }
`;

export const SearchFilter = () => {
    const [searchText] = useActions([searchTextAction]);

    const debounceInputChange = debounce((e) => searchText(e.target.value), 300);
    
    const onInputChange = (e) => {
        const event = {...e};
        debounceInputChange(event);
    }

    return <StyledSearchInput onChange={onInputChange} placeholder="search..."></StyledSearchInput>
}
