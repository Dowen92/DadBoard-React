import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import drumAudio from '../assets/audio/drum.mp3';

export default function Joke({ saveJoke }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const audioRef = useRef(null);

    function playAudio() {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 0;

        audioRef.current.play().catch(e => {
            console.warn("Audio play failed:", e);
        });
    }

    useEffect(() => {
        fetchJoke();

        audioRef.current = new Audio(drumAudio);
        audioRef.current.preload = "auto";

        return () => {
            if (audioRef.current) {
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

    async function fetchJoke() {
        if (loading) return;

        setLoading(true);

        try {
            const res = await fetch('https://icanhazdadjoke.com/', {
                headers: { Accept: "application/json" }
            });

            if (!res.ok) throw new Error("Failed to fetch jokes");

            const json = await res.json();
            setData(json);
        } catch (err) {
            console.error(err);
            toast.error("Couldn't fetch a joke - try again.");
        } finally {
            setLoading(false);
        }
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
                        <button
                            className='joke-button'
                            id="punchLineButton"
                            onClick={playAudio}
                            aria-label={`Play punch line audio.`}>
                            <i className='fas fa-drum fa-2x'></i>
                        </button>
                    </div>
                    <div className='card-item'>
                        <button
                            className={`joke-button ${loading ? "disabled" : ""}`}
                            id='getJokeButton'
                            onClick={!loading ? fetchJoke : undefined}
                            disabled={loading}
                            aria-label={`Get a new joke.`}>
                            <i className='fas fa-retweet fa-2x'></i>
                        </button>
                    </div>
                    <div className='card-item'>
                        <button
                            className={`add-joke-button joke-button ${loading ? "disabled" : ""}`}
                            id='addJokeButton'
                            onClick={() => saveJoke(data)}
                            disabled={loading}
                            aria-label={`Save joke to list.`}>
                            <i className='fa fa-plus fa-2x'></i>
                            <i className='padding-left fa fa-list-ul fa-2x'></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}