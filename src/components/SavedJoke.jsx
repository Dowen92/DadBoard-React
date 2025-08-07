export default function SavedJoke({ id, joke, laughs, deleteJoke, updateJokeLaughCounter }) {

    return (
        <div>
            <div className="joke-row">
                <p>{joke}</p>
                <div className="joke-list-buttons">
                    <button onClick={() => updateJokeLaughCounter(id)} className="button laugh-button fa-solid fa-face-grin-squint-tears fa-xl" aria-hidden="true">
                        <span className="laugh-count">{laughs}</span>
                    </button>
                    <button onClick={() => deleteJoke(id)} className="button delete-button fas fa-trash-alt" aria-hidden="true">
                    </button>
                </div>
            </div>
            <hr />
        </div>
    )
}