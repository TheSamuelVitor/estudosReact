import './App.css';
import Comment from './components/comment';
import axios from 'axios';
import { useState } from 'react';

function Titulo() {
  return <h1>Aplicacao React</h1>;
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Samuel',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        setJoke(response.data.setup + '...' + response.data.punchline)
      });
  };

  return (
    <div className="App">
      <Titulo />
      <Comment
        date={comment.date}
        author={comment.author}
        text={comment.text}
      />
      <button onClick={getJoke}>getJoke</button>
      {joke}
    </div>
  );
}

export default App;
