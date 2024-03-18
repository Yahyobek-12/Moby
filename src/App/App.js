import { Routes, Route } from 'react-router-dom';
import { Home, Navbar } from '../constants';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
