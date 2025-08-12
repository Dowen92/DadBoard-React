import { useState, useEffect, useRef } from 'react';
import drumAudio from '../assets/audio/drum.mp3';

export default function Joke({ saveJoke }) {

    const [data, setData] = useState(null);
    const audioRef = useRef(null);
    
    function playAudio() {
        if(!audioRef.current) return;

        audioRef.current.currentTime = 0;
        
        audioRef.current.play().catch(e => {
            console.warn("Audio play failed:", e);
        });
    }

    useEffect(() => {
        fetchJoke();

        audioRef.current = new Audio(drumAudio);
        audioRef.current.preload = "auto";

        return() => {
            if(audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = "";
                audioRef.current = null;
            }
        };
    }, []);

    function renderJoke() {
        if (!data)
            return 'Loading Joke...'

        let joke = data.joke;

        return joke
    }

    function fetchJoke() {
        fetch('https://icanhazdadjoke.com/', {
            method: "GET",
            headers: {
                "Accept": "application/json",
            }
        })
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }

    return (
        <>
            <section className='card'>                
                <div className='card-content'>
                    <div className='joke-text'>
                        <p id="jokeText">
                            {renderJoke()}
                        </p>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='card-item'>
                        <button className='button is-primary joke-button' id="punchLineButton" onClick={playAudio}>
                            <i className='fas fa-drum fa-2x'></i>
                        </button>
                    </div>
                    <div className='card-item'>
                        <button
                            className='button is-primary joke-button'
                            id='getJokeButton'
                            onClick={fetchJoke}>
                            <i className='fas fa-retweet fa-2x'></i>
                        </button>
                    </div>
                    <div className='card-item'>
                        <button
                            className='button is-primary add-joke-button joke-button'
                            id='addJokeButton'
                            onClick={() => saveJoke(data)}
                        >
                            <i className='fa fa-plus fa-2x'></i>
                            <i className='padding-left fa fa-list-ul fa-2x'></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}