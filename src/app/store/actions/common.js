import { makeActionCreator, makeAsyncActionCreator } from "redux-toolbelt";

export const init = makeActionCreator('INIT');
export const searchText = makeActionCreator('SEARCH_TEXT');
export const fetchDrivers = makeAsyncActionCreator('FETCH_DRIVERS');