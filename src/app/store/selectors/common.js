import { createSelector } from 'reselect'
import { filter } from "lodash"

export const drivers = state => state.driversReducer.data;
export const searchText = state => state.searchReducer.data;

export const driversByName = createSelector(
    drivers,
    searchText,
    (drivers, searchText) => 
        searchText
            ? filter(drivers, (driver) => driver.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
            : drivers
)