import { paginationAmount, SetEndStoryIndexAction, StoreStoriesAction, StoreStoriesIdsAction } from "./actions";

const initialState = { stories: [], endStoryIndex: paginationAmount , storiesIds: []};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case StoreStoriesAction:
            return {...state, stories: [...state.stories, ...action.payload]}
        case StoreStoriesIdsAction:
            return {...state, storiesIds: action.payload}
        case SetEndStoryIndexAction:
            return {...state, endStoryIndex: action.payload}
        default:
            return state;
    }
}
