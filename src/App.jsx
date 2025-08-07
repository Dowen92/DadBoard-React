import { useState, useEffect } from 'react';
import './App.css'
import Header from '../src/components/Header'
import Joke from '../src/components/Joke';
import Donation from '../src/components/Donation'
import JokesList from '../src/components/JokesList';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const storageName = "jokes";

  const [savedJokes, setSavedJokes] = useState(() => {
    const saved = localStorage.getItem(storageName);
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function saveJoke(jokeData) {
    if (!jokeData) return;

    const jokeObject = {
      id: Date.now(),
      joke: jokeData.joke.trim(),
      laughs: 0,
    }

    setSavedJokes(prev => [...prev, jokeObject]);

    toast("Joke saved!");
  }

  function deleteJoke(id) {
    setSavedJokes(prev => prev.filter(joke => joke.id !== id));
  }

  function updateJokeLaughCounter(id) {
    setSavedJokes(prev => prev.map(joke =>
      joke.id === id
        ? { ...joke, laughs: joke.laughs + 1 }
        : joke))
  }

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(savedJokes));
  }, [savedJokes]);


  return (
    <>
      <Header />
      <Joke saveJoke={saveJoke} />
      <Donation />
      <JokesList
        savedJokes={savedJokes}
        deleteJoke={deleteJoke}
        updateJokeLaughCounter={updateJokeLaughCounter}
        saveJoke={saveJoke}
      />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"

      />
    </>
  )
}

export default App