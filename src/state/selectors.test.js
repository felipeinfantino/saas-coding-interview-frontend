import { paginationAmount } from "./actions";
import { filterStoriesForRender } from "./selectors";

function generateMockStories(amount){
    const stories = []
    for(let i= 0; i < amount; i++){
        const story = { title: 'mock' + i, by: 'mockAuthor' + i}
        stories.push(story)
    }
    return stories;
}
describe('selector', ()=> {
    it("should filter the right stories to render and have the same amount as the paginationAmount", () => {
        const state = {
            stories: generateMockStories(100)
        }
        let storiesToRender = filterStoriesForRender(state, 0, 10);
        expect(storiesToRender[0].title).toEqual('mock0')
        expect(storiesToRender[9].title).toEqual('mock9')
        expect(storiesToRender.length).toEqual(paginationAmount)
        storiesToRender = filterStoriesForRender(state, 20, 30);
        expect(storiesToRender[0].title).toEqual('mock20')
        expect(storiesToRender[9].title).toEqual('mock29')
        expect(storiesToRender.length).toEqual(paginationAmount)
    })

})