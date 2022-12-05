import React, { useEffect, useState } from 'react';
import Output from '../Output';
import { API } from './../../API/index';
import video from './video/r&m.mp4'
import './Home.css'
const Home = () => {
    const [characters, setCharacters] = useState([])

    const getCharacter = async () => {
        const req = await fetch(API)
        const res = await req.json()
        setCharacters(res.results);
    }
    useEffect(() => {
        getCharacter()
    }, [])
    return (
        <div className='home'>
            <video autoPlay muted loop src={video} className='video'></video>
            <Output characters={characters} />
        </div>
    );
};

export default Home;