import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Header/Resume';

const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <GlobalStyle />
        </>
    );
};

export default App;