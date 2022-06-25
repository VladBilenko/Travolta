import { SEARCH_HOTELS } from "./actions";

const initialState: any[] = [];

const hotels = (state = initialState, action: any) => {
    switch (action.type) {
        case SEARCH_HOTELS:
            return action.payload;
        default:
            return state;
    }
}

const hotelsReducers = {
    hotels,
}

export default hotelsReducers;
