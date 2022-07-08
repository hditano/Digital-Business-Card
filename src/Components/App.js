import React from 'react';
import ImageBackground from './ImageBackground';
import MainContent from './MainContent';

export default function App() {
    return (
        <div className='MainContainer'>
            <MainContent />
            <ImageBackground />
        </div>
    )
}