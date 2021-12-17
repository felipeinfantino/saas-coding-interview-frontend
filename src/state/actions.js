import axios from 'axios'
// I regularyl use typescript with type-safe actions, this is my attemp to do it in js
export const StoreStoriesAction = 'StoreStoriesAction';
export const StoreStoriesIdsAction = 'StoreStoriesIdsAction';
export const SetEndStoryIndexAction = 'SetEndStoryIndexAction';

export const paginationAmount = 10;

const baseUrl = "https://hacker-news.firebaseio.com"

export async function loadTopstories(dispatch) {
    const storiesData = await axios.get(`${baseUrl}/v0/askstories.json`)
    const storiesIds = storiesData.data;
    dispatch({payload: storiesIds, type: StoreStoriesIdsAction})
    fetchStories(dispatch, storiesIds, 0, paginationAmount)
}

export async function fetchStories(dispatch, storiesIds, startIndex, endIndex){
    const loadStoryPromises = []
    for(let index = startIndex; index < endIndex; index++){
        const storyId = storiesIds[index]
        const fetchStoryPromise = fetchStoryById(storyId)
        loadStoryPromises.push(fetchStoryPromise)
    }
    const loadedStoriesResponses = await Promise.all(loadStoryPromises)
    const loadedStories = loadedStoriesResponses.map(response => response.data)
    dispatch({payload: loadedStories, type: StoreStoriesAction})
    
}


function fetchStoryById(id) {
    return axios.get(`${baseUrl}/v0/item/${id}.json`)
}
