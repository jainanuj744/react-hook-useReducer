import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import TodoReducers from './Components/TodoReducers';

function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      <TodoReducers/>
    </div>
  );
}

export default App;
