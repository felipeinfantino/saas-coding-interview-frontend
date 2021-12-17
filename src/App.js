import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography } from '@mui/material';
import store from './state/store';
import NewsList from './components/NewsList';
// import { Task2 } from './Task2';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography variant="h4" style={{textAlign: 'center', margin: '3rem'}}>Hacker News Topstories</Typography>
                <NewsList />
                {/* <Task2 /> */}
            </Container>
        </Provider>
    );
}

export default App;
