

export function filterStoriesForRender(state, startIndex, endIndex){
    return state.stories.slice(startIndex, endIndex)
}