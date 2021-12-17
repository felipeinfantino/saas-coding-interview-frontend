import axios from 'axios';
import { fetchStories } from './actions';

jest.mock('axios');


function generateMockIds(amount){
    const storiesIds = []
    for(let i= 0; i < amount; i++){
        storiesIds.push(i)
    }
    return storiesIds;
}

describe("actions", ()=>{
    it("fetchStories should send the right amount of get request to the newsApi", () => {
        const storiesIds = generateMockIds(100);
        fetchStories(() => {}, storiesIds, 0, 10 );
        expect(axios.get).toHaveBeenCalledTimes(10)
        fetchStories(() => {}, storiesIds, 30, 40 );
        expect(axios.get).toHaveBeenCalledTimes(20)
    })
})