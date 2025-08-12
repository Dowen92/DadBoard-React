export default function SavedJoke({ id, joke, laughs, deleteJoke, updateJokeLaughCounter }) {

    return (
        <div>
            <div className="joke-row">
                <p>{joke}</p>
                <div className="joke-list-buttons">
                    <button
                        className="button laugh-button fa-solid fa-face-grin-squint-tears fa-xl"
                        aria-label={`Add to laugh counter for the joke ${joke}`}
                        onClick={() => updateJokeLaughCounter(id)}
                    >
                        <span className="laugh-count">{laughs}</span>
                        <span className="visually-hidden">Laughs</span>
                    </button>
                    <button
                        className="button delete-button fas fa-trash-alt"
                        onClick={() => deleteJoke(id)}
                        aria-label={`Delete the joke ${joke}`}                        
                    >
                        <span className="visually-hidden">Delete</span>
                    </button>
                </div>
            </div>
            <hr />
        </div>
    )
}