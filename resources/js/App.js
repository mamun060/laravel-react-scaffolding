// import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <div>
        <Link to='/'>Home</Link>
     </div>
     <div>
        <Link to='/test'> Click Me</Link>
     </div>
      <Routes>
        <Route path='/' element={<Home />}  />
          <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
