import { useState } from "react";
import SavedJoke from "./SavedJoke";

export default function JokesList({ savedJokes, deleteJoke, updateJokeLaughCounter, saveJoke }) {

    const [newJokeText, setNewJokeText] = useState("");

    function renderJokes() {
        const jokeListElements = savedJokes.map(joke =>
            <SavedJoke
                key={joke.id}
                id={joke.id}
                joke={joke.joke}
                laughs={joke.laughs}
                deleteJoke={deleteJoke}
                updateJokeLaughCounter={updateJokeLaughCounter}
            />
        );

        return jokeListElements;
    }

    function onClickSaveJoke(){
        if(!newJokeText.trim()) return;

        const jokeData = {
            joke: newJokeText.trim()
        };

        saveJoke(jokeData);

        setNewJokeText("");
    }


    return (
        <section className='card list-card'>
            <div className='list-container' id="list-container">
                <div className='list-header'>
                    <div className='list-title'>
                        <h1>Jokes</h1>
                    </div>
                    <div className='field is-grouped flex-1'>
                        <button onClick={onClickSaveJoke} className='button is-primary add-button' id="addJokeButton"><i className='fas fa-plus'></i></button>
                        <input 
                        value={newJokeText}
                            onChange={(e) => setNewJokeText(e.target.value)} 
                            className='input' 
                            id="jokeInput" 
                            type="text" 
                            placeholder="Add a new joke to your list..." 
                        />
                    </div>
                </div>
                <hr />
                {savedJokes.length > 0 ?
                    <div className='jokes-container' id="jokes-container">
                        {renderJokes()}
                    </div>
                    :
                    <p className='no-joke-text is-hidden' id="no-joke">You don't have any jokes added</p>
                }
            </div>
        </section>

    )
}