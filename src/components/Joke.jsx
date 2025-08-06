import { useState, useEffect } from 'react';
import drumAudio from '../../src/assets/audio/drum.mp3';

export default function Joke() {
    let audio = new Audio(drumAudio);
    function playAudio() {
        audio.play()
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchJoke();
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
                <audio src="drumAudio" id="audio"></audio>
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
                        <button className='button is-primary add-joke-button joke-button' id='addJokeButton'>
                            <i className='fa fa-plus fa-2x'></i>
                            <i className='padding-left fa fa-list-ul fa-2x'></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}