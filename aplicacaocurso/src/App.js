import './App.css';
import Comment from './components/comment'

function Titulo() {
  return <h1>Aplicacao React</h1>
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Samuel',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function App() {
  return (
    <div className="App">
      <Titulo />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default App;
