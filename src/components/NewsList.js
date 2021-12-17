import React, { useEffect } from 'react';
import { fetchStories, loadTopstories, paginationAmount, SetEndStoryIndexAction } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import NewsListEntry from './NewsListEntry';
import { Container, Button } from '@mui/material';
import { filterStoriesForRender } from '../state/selectors';


function NewsList() {
    const dispatch = useDispatch();
    const {storiesIds, stories , endStoryIndex} = useSelector(state => state);
    const storiesToRender = useSelector((state) => filterStoriesForRender(state, endStoryIndex - paginationAmount, endStoryIndex))

    useEffect(() => {
        async function setInitialState(){
            await loadTopstories(dispatch)
        }
        setInitialState()
    } , [])


    async function incrementPage(){
        const newEndStoryIndex = endStoryIndex + paginationAmount;
        const shouldFetchNewStories = newEndStoryIndex > stories.length;
        if(shouldFetchNewStories){
            await fetchStories(dispatch, storiesIds, endStoryIndex, newEndStoryIndex)
        }
        dispatch({payload: newEndStoryIndex, type: SetEndStoryIndexAction})
    }

    function decrementPage(){
        const newEndStoryIndex = endStoryIndex - paginationAmount;
        dispatch({payload: newEndStoryIndex, type: SetEndStoryIndexAction})
    }

    function getMaxPaginationIndex(){
        return Math.ceil(storiesIds.length/paginationAmount)*paginationAmount;
    }

    return <div>
        <Container style={{textAlign: 'center'}}>
            <Button variant="outlined" style={{margin: '0.5rem', color: 'black'}} disabled={endStoryIndex === paginationAmount} onClick={() => decrementPage()} >Previous</Button>
            <Button variant="outlined" style={{margin: '0.5rem', color: 'black'}} disabled={endStoryIndex === getMaxPaginationIndex() } onClick={() => incrementPage() }>Next</Button>
        </Container>
        {storiesToRender ? 
        storiesToRender.map(story => <NewsListEntry {...story} key={story.id} />) 
        : <>Loading</>}
        </div>;
}

export default NewsList;
