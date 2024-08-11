import React from 'react';
import './App.css';
import {Todo} from "./components/Todo";

function App() {
  const initialData = [
    { id: 1, text: 'Тестовое задание', completed: false },
    { id: 2, text: 'Прекрасный код', completed: true },
    { id: 3, text: 'Покрытие тестами', completed: false },
  ]
  return (
    <div className="App">
      <Todo data={initialData} />
    </div>
  );
}

export default App;
