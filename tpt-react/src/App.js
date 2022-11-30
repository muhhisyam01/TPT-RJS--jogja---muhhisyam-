import logo from './logo.svg';
import './App.css';
fetch('https://dummyjson.com/users?limit=10&skip=5&select=firstName,image,age,weight')
.then(res => res.json())
.then(console.log);

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
