import { fetchDrivers, searchText }  from "../actions"

const initialAssyncState = {
    loaded: false,
    loading: false,
    error: false,
    errorMessage: null,
    data: []
}

export const driversReducer = (state=initialAssyncState, action) => {
    if(action.type === fetchDrivers.TYPE){
        return {
            ...state,
            loading: true,
        }
    }
    if(action.type === fetchDrivers.success.TYPE){
        return {
            ...state,
            loaded: true,
            loading: false,
            data: action.payload
        }
    }
    if(action.type === fetchDrivers.failure.TYPE){
        return {
            ...state,
            loading: false,
            error: true,
            errorMessage: action.payload
        }
    }
    return state
};


export const searchReducer = (state={data: ""}, action) => {
    switch(action.type){
        case searchText.TYPE:
            return { 
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}