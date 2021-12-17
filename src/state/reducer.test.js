import { paginationAmount, SetEndStoryIndexAction, StoreStoriesAction, StoreStoriesIdsAction } from "./actions";
import reducer from "./reducer";

const initialState = { stories: [], endStoryIndex: paginationAmount , storiesIds: []};

describe('reducer', () => {
    it('should add new stories when StoreStoriesAction is triggered', () => {
        const story1 = {title: 'mock', text: 'mock'}
        const story2 = {title: 'mock2', text: 'mock2'}
        const story3 = {title: 'mock3', text: 'mock3'}
        const newStoriesAction1 = { payload: [story1, story2], type: StoreStoriesAction}
        const newStoriesAction2 = { payload: [story3], type: StoreStoriesAction}
        let newState = reducer(initialState, newStoriesAction1)        
        expect(newState.stories).toEqual([story1, story2])
        newState = reducer(newState, newStoriesAction2)
        expect(newState.stories).toEqual([story1, story2, story3])
    });

    it('should replace all storiesIds when StoreStoriesIdsAction is triggered', () => {
        const storiesIds1 =  [123, 546, 5673, 6235]
        const storiesIds2 =  [567, 57846, 5634573, 629835]
        const newStoriesIdsAction1 = { payload: storiesIds1, type: StoreStoriesIdsAction}
        const newStoriesIdsAction2 = { payload: storiesIds2, type: StoreStoriesIdsAction}
        let newState = reducer(initialState, newStoriesIdsAction1)        
        expect(newState.storiesIds).toEqual(storiesIds1)
        newState = reducer(newState, newStoriesIdsAction2)
        expect(newState.storiesIds).toEqual(storiesIds2)
    });

    it('should replace the endStoryIndex when SetEndStoryIndexAction is triggered', () => {
        const newIndex1 = 20;
        const newIndex2 = 30;
        const newEndStoryIndexAction1 = { payload: newIndex1, type: SetEndStoryIndexAction}
        const newEndStoryIndexAction2 = { payload: newIndex2, type: SetEndStoryIndexAction}
        let newState = reducer(initialState, newEndStoryIndexAction1)        
        expect(newState.endStoryIndex).toEqual(newIndex1)
        newState = reducer(newState, newEndStoryIndexAction2)
        expect(newState.endStoryIndex).toEqual(newIndex2)
    });

    



});
